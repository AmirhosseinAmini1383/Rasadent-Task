"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function Search() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const debouncedSearch = useDebounce(search, 150);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (debouncedSearch.length < 3) {
      newParams.delete("q");
      router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
      return;
    }

    newParams.set("q", debouncedSearch);
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  }, [debouncedSearch]);

  const formSubmit = (e) => {
    e.preventDefault();

    const newParams = new URLSearchParams(searchParams.toString());
    if (search.length < 3) {
      setSearch("");
      newParams.delete("q");
    } else {
      newParams.set("q", search);
    }

    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <form className="relative" onSubmit={formSubmit}>
      <input
        type="text"
        name="search"
        placeholder="جستجو..."
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full py-3 px-4 rounded-xl text-secondary-400 focus:bg-secondary-0 transition-all duration-300 ease-out focus:shadow-lg text-xs bg-secondary-0 border border-secondary-10 hover:border-primary-500 focus:border-primary-500  focus:shadow-primary-200 dark:focus:shadow-secondary-200 placeholder:text-secondary-300"
      />
      <button
        type="submit"
        className="absolute left-0 top-0 ml-3 flex h-full items-center"
      >
        <MagnifyingGlassIcon className="h-4 text-secondary-400" />
      </button>
    </form>
  );
}

export default Search;
