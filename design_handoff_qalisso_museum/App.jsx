const { useState: useAppState, useEffect: useAppEffect } = React;

function App() {
  const [page, setPage] = useAppState('HOME');

  const navigate = p => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useAppEffect(() => {
    // restore from hash on load
    const hash = window.location.hash.replace('#', '').toUpperCase();
    const valid = ['HOME','VISIT','EVENTS','COLLECTIONS','EXHIBITIONS','CONTACT','TICKETS'];
    if (valid.includes(hash)) setPage(hash);
  }, []);

  useAppEffect(() => {
    window.location.hash = page;
    document.title = page === 'HOME' ? 'QALISSO MUSEUM' : `${page} — QALISSO MUSEUM`;
  }, [page]);

  const pages = {
    HOME:        <HomePage        setPage={navigate} />,
    EXHIBITIONS: <ExhibitionsPage setPage={navigate} />,
    COLLECTIONS: <CollectionsPage />,
    EVENTS:      <EventsPage />,
    VISIT:       <VisitPage />,
    CONTACT:     <ContactPage />,
    TICKETS:     <TicketsPage     setPage={navigate} />,
  };

  return (
    <>
      <Navbar currentPage={page} setPage={navigate} />
      <div key={page} className="page-fade">
        {pages[page] || <HomePage setPage={navigate} />}
        <Footer setPage={navigate} />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
