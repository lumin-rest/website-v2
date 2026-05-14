export default function Script() {
  return (
    <pre style={{ all: "unset", display: "block" }}>
      {`loadstring(game:HttpGet("https://api.luarmor.net/files/v4/loaders/1e8ed553780d0658105a816d5a17b100.lua"))()`}
    </pre>
  );
}
