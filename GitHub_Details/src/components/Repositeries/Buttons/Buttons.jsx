const Buttons = ({ current_page, Max_page, onSubmit, setPage }) => {
  const next_page = () => {
    if (current_page < Max_page) {
      setPage(current_page + 1);
      onSubmit(current_page + 1); // Pass new page number
    }
  };

  const prev_page = () => {
    if (current_page > 1) {
      setPage(current_page - 1);
      onSubmit(current_page - 1);
    }
  };

  return (
    <div className="mt-2 flex justify-around items-start">
      <button
        className="rounded-lg bg-blue-500 px-3 py-2 font-semibold text-white hover:bg-blue-700"
        disabled={current_page <= 1}
        onClick={prev_page}
      >
        &larr; Previous
      </button>

      {Number.isFinite(Max_page) && (
        <p className="font-semibold">
          Page {current_page} of {Max_page}
        </p>
      )}

      <button
        className="rounded-lg bg-blue-500 px-3 py-2 font-semibold text-white hover:bg-blue-700"
        disabled={current_page >= Max_page}
        onClick={next_page}
      >
        Next &rarr;
      </button>
    </div>
  );
};

export default Buttons;
