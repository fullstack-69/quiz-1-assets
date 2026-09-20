# Example Database Project

- โปรเจคตัวอย่างนี้ ใช้สำหรับตอบคำถามเกี่ยวกับเนื้อหาส่วน database design concept
- โปรเจคตัวอย่างนี้มีไฟล์เพียงบางส่วน นศ. ไม่สามารถ `pnpm install` หรือ `pnpm run dev` ได้จริงๆ
- ให้ถือว่าโปรเจคนี้มีไฟล์อื่นๆ ที่จำเป็น และมีการติดตั้ง dependency และ dev dependency ต่างๆ ครบถ้วน
- ไฟล์ [db/schema.ts](db/schema.ts) ใช้กำหนดโครงสร้างของฐานข้อมูล
- ไฟล์ [db/prototype.ts](db/prototype.ts) จัดเก็บโค้ดสำหรับทดสอบการทำงานของ database
- กรุณาตรวจสอบไฟล์กำหนดค่าต่างๆ ([package.json](package.json), [.env](.env), ...) ให้ดีก่อนที่จะตอบคำถาม