import NotFoundClient from "./not-found-client";

export const metadata = {
  title: "Page Not Found",
  description: "Oops! The page you're looking for couldn't be found.",
};

export default function NotFound() {
  return <NotFoundClient />;
}
