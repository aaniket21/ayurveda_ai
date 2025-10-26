import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

const API_KEY = ""; // 🔐 Replace with environment variable in production

const MedicalAssistantChatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    const styles = {
        body: {
            fontFamily: 'Arial, sans-serif',
            background: '#eef1f7',
            height: '100vh',
            margin: 0,
            padding: 0,
        },
        chatContainer: {
            maxWidth: '700px',
            margin: '40px auto',
            background: '#fff',
            height: '80vh',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            padding: '20px',
        },
        chatHeader: {
            textAlign: 'center',
            fontSize: '1.5em',
            marginBottom: '10px',
            fontWeight: 'bold',
            color: '#333',
        },
        messages: {
            maxHeight: '63vh',
            overflowY: 'auto',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '6px',
            background: '#fafafa',
            height: '63vh',
        },
        message: {
            margin: '10px 0',
            padding: '10px',
            borderRadius: '8px',
            lineHeight: '1.4',
            whiteSpace: 'pre-wrap',
        },
        user: {
            backgroundColor: '#d1e7dd',
            textAlign: 'right',
        },
        bot: {
            backgroundColor: '#f8d7da',
            textAlign: 'left',
        },
        inputArea: {
            marginTop: '15px',
            display: 'flex',
            gap: '10px',
            position:'bottom:0',
        },
        input: {
            flex: 1,
            padding: '10px',
            fontSize: '1em',
            borderRadius: '5px',
            border: '1px solid #ccc',
        },
        button: {
            padding: '10px 20px',
            fontSize: '1em',
            backgroundColor: '#0069d9',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        buttonHover: {
            backgroundColor: '#0053b3',
        },
        disclaimer: {
            marginTop: '15px',
            fontSize: '0.8em',
            color: '#555',
            textAlign: 'center',
        },
    };

    const appendMessage = (text, sender) => {
        setMessages(prev => [...prev, { text, sender }]);
    };

    const sendMessage = async () => {
        const input = userInput.trim();
        if (!input) return;

        appendMessage(input, 'user');
        setUserInput('');

        const prompt = "You are a helpful and accurate ayurvedic vaidya. " +
            "Answer concisely and clearly. Here's the user query:\n\n" + input;

        try {
            const res = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        contents: [
                            {
                                role: "user",
                                parts: [{ text: prompt }]
                            }
                        ]
                    }),
                }
            );

            const data = await res.json();
            const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text ||
                "Sorry, I couldn't generate a response.";
            appendMessage(reply, 'bot');
        } catch (error) {
            console.error("API Error:", error);
            appendMessage("There was an error contacting Gemini. Please try again later.", 'bot');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') sendMessage();
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div style={styles.body}>
            <div>
                <h1 className="legal-siteTitle">
                <Link to="/">
                    AyurVeda <span className="legal-siteSign" style={{ color: "red" }}>+</span>
                </Link>
            </h1>
            </div>
            <div style={styles.chatContainer}>
                <div style={styles.chatHeader}>Medical Assistant</div>

                <div style={styles.messages}>
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.message,
                                ...(msg.sender === 'user' ? styles.user : styles.bot),
                            }}
                        >
                            {msg.text}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                <div style={styles.inputArea}>
                    <input
                        type="text"
                        placeholder="Ask a medical question..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        style={styles.input}
                    />
                    <button
                        onClick={sendMessage}
                        style={styles.button}
                        onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                    >
                        Send
                    </button>
                </div>

                <div style={styles.disclaimer}>
                    ⚠️ This chatbot is for informational purposes only and is not a substitute for professional medical advice.
                </div>
            </div>
        </div>
    );
};

export default MedicalAssistantChatbot;
