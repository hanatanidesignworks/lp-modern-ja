import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, contact, message } = body as {
    name: string;
    contact: string;
    message: string;
  };

  // 空チェック
  if (!name?.trim() || !contact?.trim() || !message?.trim()) {
    return Response.json(
      { error: "必須項目が入力されていません。" },
      { status: 400 }
    );
  }

  // メール送信
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: "【問い合わせ】ハナタニガーデンワークス",
    text: [
      `名前：${name}`,
      `連絡先：${contact}`,
      `内容：\n${message}`,
    ].join("\n\n"),
  });

  return Response.json({ ok: true });
}
