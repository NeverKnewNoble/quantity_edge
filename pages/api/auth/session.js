import { withSessionRoute } from "@/lib/session";

export default withSessionRoute(async function handler(req, res) {
  if (!req.session.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  return res.status(200).json(req.session.user);
});