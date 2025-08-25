// src/components/BreadcrumbNavigation.tsx
import Link from "next/link";

interface BreadcrumbNavigationProps {
  category: string;
  subcategory?: string;
  productName: string;
}

const BreadcrumbNavigation = ({ category, subcategory, productName }: BreadcrumbNavigationProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600">
      <Link href="/" className="hover:text-pinki transition-colors duration-200">
        Home
      </Link>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      <Link href="/shop" className="hover:text-pinki transition-colors duration-200">
        Shop
      </Link>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      <Link href={`/categories/${category.toLowerCase()}`} className="hover:text-pinki transition-colors duration-200">
        {category}
      </Link>
      {subcategory && (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href={`/categories/${category.toLowerCase()}/${subcategory.toLowerCase()}`} className="hover:text-pinki transition-colors duration-200">
            {subcategory}
          </Link>
        </>
      )}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      <span className="text-gray-900 font-medium line-clamp-1 max-w-xs">
        {productName}
      </span>
    </nav>
  );
};

export default BreadcrumbNavigation;