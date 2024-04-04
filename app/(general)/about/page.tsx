import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ['About Page', 'Max Herrera', 'información', '...'], 
};

export default function aboutPage() {
    return (
        <span className="text-7xl">About Page</span>
    );
}