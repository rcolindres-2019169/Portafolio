import App from "./App";
import { FeedContent } from "./components/FeedContent";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

export const routes = [
    {
        path: '/',
        element: <App />
    },
    {
        path: '/feed/*',
        element: <FeedContent />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]