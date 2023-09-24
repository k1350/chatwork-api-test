async function test() {
  const encodedParams = new URLSearchParams();

  encodedParams.set(
    "body",
    "[info][title]自動申請ロボット[/title]Hello World!\nこんにちは！[/info]",
  );
  encodedParams.set("self_unread", "0");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const env = (window as any).envVars;

  const url = `https://api.chatwork.com/v2/rooms/${env.roomId}/messages`;
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/x-www-form-urlencoded",
      "x-chatworktoken": env.apiToken ?? "",
    },
    body: encodedParams,
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
}
document.getElementById("test")?.addEventListener("click", test);
