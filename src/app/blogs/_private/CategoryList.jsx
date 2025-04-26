import Link from "next/link";

export default async function CategoryList() {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);

  const data = await res.json();
  const categories = data.data.categories;

  return (
    <ul className="flex flex-col gap-2">
      <li>
        <Link href={`/blogs/`}>All</Link>
      </li>
      {categories.map((category) => (
        <li key={category._id}>
          <Link href={`/blogs/category/${category.slug}`}>
            {category.englishTitle}
          </Link>
        </li>
      ))}
    </ul>
  );
}
