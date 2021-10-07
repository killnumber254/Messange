function Message({ handleChange, handleClick, value }) {
  return (
    <div>
      <form className="chat_text">
        <input type="text" onChange={handleChange} value={value} />
        <button type="submit" onClick={handleClick}>
          Отправить
        </button>
      </form>
    </div>
  );
}

export default Message;
