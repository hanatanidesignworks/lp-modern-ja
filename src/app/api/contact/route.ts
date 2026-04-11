import nodemailer from "nodemailer";

export async function POST(request: Request) {
  // ── リクエスト解析 ──────────────────────────────────────
  let body: { name?: string; contact?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "リクエストの形式が正しくありません。" },
      { status: 400 }
    );
  }

  const { name, contact, message } = body;

  // ── 空チェック ──────────────────────────────────────────
  if (!name?.trim() || !contact?.trim() || !message?.trim()) {
    return Response.json(
      { error: "必須項目が入力されていません。" },
      { status: 400 }
    );
  }

  // ── メール送信 ──────────────────────────────────────────
  try {
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
  } catch (err) {
    console.error("[contact] sendMail error:", err);
    return Response.json(
      { error: "メールの送信に失敗しました。お電話またはLINEでご連絡ください。" },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
