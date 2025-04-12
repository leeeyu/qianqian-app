
import { useState } from "react";
import ReactDOM from "react-dom/client";

function QianQianApp() {
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [diary, setDiary] = useState("");
  const [message, setMessage] = useState("");
  const [dogWords, setDogWords] = useState("");

  const handleCompleteTask = () => {
    setTaskCompleted(true);
    setMessage("任務已完成，主主會記錄這份恥辱。");
  };

  const handleDiarySubmit = () => {
    setMessage("主主收到你的悔過了。");
    setDiary("");
  };

  const handleDogWordsSubmit = () => {
    setMessage(`你說的是：${dogWords}，是否夠狗呢？`);
    setDogWords("");
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "1rem" }}>芊芊服從系統</h1>

      <div style={{ marginBottom: "2rem" }}>
        <h2>今日任務：舔誓 + 狗姿回報</h2>
        <button onClick={handleCompleteTask} disabled={taskCompleted} style={{ marginTop: "0.5rem" }}>
          {taskCompleted ? "已完成" : "完成任務"}
        </button>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2>每日羞辱日誌</h2>
        <textarea
          rows="4"
          placeholder="寫下你的羞辱經歷與懺悔內容..."
          value={diary}
          onChange={(e) => setDiary(e.target.value)}
          style={{ width: "100%", marginTop: "0.5rem" }}
        />
        <button onClick={handleDiarySubmit} style={{ marginTop: "0.5rem" }}>提交日誌</button>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2>狗語訓練</h2>
        <input
          type="text"
          placeholder="請輸入狗語，例如：汪汪、舔舔..."
          value={dogWords}
          onChange={(e) => setDogWords(e.target.value)}
          style={{ width: "100%", marginTop: "0.5rem" }}
        />
        <button onClick={handleDogWordsSubmit} style={{ marginTop: "0.5rem" }}>送出</button>
      </div>

      {message && <div style={{ marginTop: "1rem", color: "darkred" }}>{message}</div>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<QianQianApp />);
