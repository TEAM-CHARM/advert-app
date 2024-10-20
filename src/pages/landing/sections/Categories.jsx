import React, { useEffect, useState } from "react";
import { CATEGORIES } from "../../../constants";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      // const res = await getAllEvents()
      setCategories(CATEGORIES);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching all events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex py-2 mt-20 align-middle justify-center items-center gap-6 overflow-x-auto">
      {categories &&
        categories.map((category, index) => {
          const CategoryIcon = category.icon;
          return (
            <Link
              key={index}
              className="flex align-middle items-center gap-2 rounded-3xl border border-gray-400 p-2 px-4"
            >
              <CategoryIcon className="text-primary-light" />{" "}
              <p className="text-sm text-gray-600 ">{category.name}</p>
            </Link>
          );
        })}
    </div>
  );
};

export default Categories;
