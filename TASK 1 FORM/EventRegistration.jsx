import React from "react";

export default function EventRegistration() {

  function handleSubmit(e) {
    e.preventDefault();
    alert("Event Registered Successfully!");
  }

  return (
    <>
      {/* Professional CSS */}
      <style>{`
        body {
  margin: 0;
  padding: 0;
  background-image: url('/event-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* <-- makes image stay fixed */
  background-repeat: no-repeat;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* allows scrolling */
  padding-top: 40px;
}


        .container {
          background: rgba(255, 255, 255, 0.95);
          width: 420px;
          padding: 25px 30px;
          border-radius: 12px;
          box-shadow: 0px 8px 20px rgba(0,0,0,0.2);
          backdrop-filter: blur(4px);
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
          font-size: 24px;
          color: #333;
          font-weight: 600;
        }

        .input-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          font-weight: 600;
          margin-bottom: 5px;
          color: #444;
        }

        input, select, textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #aaa;
          border-radius: 6px;
          font-size: 14px;
        }

        textarea {
          resize: none;
        }

        .options {
          margin-bottom: 15px;
        }

        .radio-group, .checkbox-group {
          margin-left: 10px;
          margin-bottom: 5px;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background: #ff6600;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          font-weight: 600;
          margin-top: 10px;
        }

        .submit-btn:hover {
          background: #e25500;
        }
      `}</style>

      <div className="container">
        <h2>Event Registration</h2>

        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          {/* Phone */}
          <div className="input-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter phone number" required />
          </div>

          {/* Date */}
          <div className="input-group">
            <label>Event Date</label>
            <input type="date" required />
          </div>

          {/* Dropdown */}
          <div className="input-group">
            <label>Select Event Type</label>
            <select required>
              <option value="">-- Choose Event --</option>
              <option value="music">Music Concert</option>
              <option value="tech">Tech Workshop</option>
              <option value="sports">Sports Meet</option>
              <option value="seminar">Educational Seminar</option>
            </select>
          </div>

          {/* Radio */}
          <div className="options">
            <label>Attendance Type</label>
            <div className="radio-group">
              <input type="radio" name="attend" value="online" required /> Online
            </div>
            <div className="radio-group">
              <input type="radio" name="attend" value="offline" /> Offline
            </div>
          </div>

          {/* Checkboxes */}
          <div className="options">
            <label>Preferred Activities</label>
            <div className="checkbox-group">
              <input type="checkbox" /> Networking
            </div>
            <div className="checkbox-group">
              <input type="checkbox" /> Workshops
            </div>
            <div className="checkbox-group">
              <input type="checkbox" /> Games
            </div>
            <div className="checkbox-group">
              <input type="checkbox" /> Photography
            </div>
          </div>

          {/* Text Area */}
          <div className="input-group">
            <label>Special Requirements</label>
            <textarea rows="3" placeholder="Write here (optional)"></textarea>
          </div>

          {/* File Upload */}
          <div className="input-group">
            <label>Upload ID Card</label>
            <input type="file" />
          </div>

          {/* Submit */}
          <button className="submit-btn" type="submit">Register Now</button>

        </form>
      </div>
    </>
  );
}
