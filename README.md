
# ⚙️ JavaScript Challenge 03 - Convert Gregorian Date to Persian (Shamsi) ## 📌 Description This is the third challenge in my JavaScript learning path. The goal is to build a simple and clean JavaScript function that converts a Gregorian date (e.g., 2025-04-17) into a Persian (Shamsi/Jalali) date using JavaScript's native Intl.DateTimeFormat API. --- ## 🧠 Function: formatDate(dateString) ### ✅ Purpose: Converts a Gregorian date string to a formatted Persian (Shamsi) date. ### 🧾 Input: - dateString: A date in ISO format like "2025-04-17" ### 🧾 Output: - A Persian (Shamsi) date in yyyy/mm/dd format --- ## 💻 Code `javascript const formatDate = (dateString) => { const date = new Date(dateString); const options = { year: 'numeric', month: '2-digit', day: '2-digit', calendar: 'persian', }; const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', options); const result = formatter.format(date); return result; }; // Test const testDate = '2025-04-17'; const shamsi = formatDate(testDate); console.log(`${testDate}: ${shamsi}`); 

🔍 Explanation

formatDate(dateString) → Defines an arrow function with a date string input.

new Date(dateString) → Converts the input string to a native JavaScript Date object.

options → Defines the formatting style using the Persian calendar.

Intl.DateTimeFormat → JavaScript's built-in internationalization API for date formatting.

formatter.format(date) → Formats the date based on the given locale and options.

📅 Example Output

2025-04-17: 1404/01/28 

⚠️ Note: Output may slightly differ based on system timezone.

⚡️ Dependencies

✅ Pure JavaScript

✅ No external libraries

✅ Works in modern browsers & Node.js

🚀 Usage

Front-end applications (Vanilla JS or frameworks)

Backend services (Node.js)

Any project requiring Shamsi/Jalali date conversion

🪪 License

This project is free and open-source for educational and learning purposes.
