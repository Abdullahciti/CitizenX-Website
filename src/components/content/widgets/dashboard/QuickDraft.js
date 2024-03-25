import { useState } from "react";
import axios from "axios";

const QuickDraft = () => {
  const [clientName, setClientName] = useState("");
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  // Start Validation here
  const [errClientName, setErrClientName] = useState(false)
  const [errtitle, setErrTitle] = useState(false);
  const [errThought, setErrThought] = useState(false);

  const [draft, setDraft] = useState(true);

  const handleClientName = (e) => {
    setClientName(e.target.value)
  } 
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleThought = (e) => {
    setThought(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true)
    }
    if (!title) {
      setErrTitle(true);
    }
    if (!thought) {
      setErrThought(true);
    } else {
      if (thought.length < 12) {
        setErrThought(true);
      }
    }
    if (clientName && title && thought && thought.length > 10) {
      axios.post("https://getform.io/f/panveqva", {
        name: clientName,
        title: title,
        message: thought,
      });
      setDraft(false);
      setTitle("");
      setThought("");
    }
  };

  return (
    <div className="quick-draft p-20 bg-mainMode rad-10">
      <h2 className="mt-0 mb-10">Quick Draft</h2>
      <p className="mt-0 mb-20 c-grey fs-15">Write me a draft for new ideas</p>
      {draft ? (
        <form>
          <input
            onChange={handleClientName}
            className={
              errClientName
                ? "d-block mb-20 w-full p-10 b-none bg-eee rad-6 error"
                : "d-block mb-20 w-full p-10 b-none bg-eee rad-6"
            }
            type="text"
            placeholder="Your Name"
          />
          <input
            onChange={handleTitle}
            className={
              errtitle
                ? "d-block mb-20 w-full p-10 b-none bg-eee rad-6 error"
                : "d-block mb-20 w-full p-10 b-none bg-eee rad-6"
            }
            type="text"
            placeholder="Title"
          />
          <textarea
            onChange={handleThought}
            className={
              errThought
                ? "d-block mb-20 w-full p-10 b-none bg-eee rad-6 error"
                : "d-block mb-20 w-full p-10 b-none bg-eee rad-6"
            }
            placeholder="Your Thought"
          ></textarea>
          <button
            className="save d-block fs-14 bg-mainColor c-white b-none w-fit btn-shape"
            onClick={handleSave}
          >
            Save
          </button>
        </form>
      ) : (
        <div className="saved">
          <p>Hello dear {clientName}, Your idea has been sent successfully</p>
        </div>
      )}
    </div>
  );
};

export default QuickDraft;
