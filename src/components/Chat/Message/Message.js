function Message({ handleChange, handleClick }) {
  return (
    <>
      <div className="chat_text">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Отправить</button>
      </div>
    </>
  );
}

export default Message;
