import React from "react";

import CategoryButton from "./categoryButton";
import AnimtionOnScroll from "./animtionOnScroll";

import styles from "../styles/course/course.module.css";

import Course from "./course";

import { AnimatePresence, AnimationType, motion } from "framer-motion";

const Courses = () => {
  const [selectedCourseCategory, setSelectedCourseCategory] =
    React.useState("All Program");

  const courseCategories = [
    "All Program",
    "UI/UX Design",
    "Product Management",
    "Branding Design",
    "Mobile Development",
    "Web Development",
    "Machine Learning",
  ];

  const projects = [
    {
      id: "1",
      rate: 3,
      cover: "https://images2.imgbox.com/b0/16/0ECVsENd_o.png",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      priceWithOutOff: 500000,
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسو ساخپ.",
    },
    {
      id: "2",
      rate: 5,
      cover: "https://images2.imgbox.com/7e/d5/XEXLvILW_o.png",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "3",
      rate: 5,
      cover: "https://images2.imgbox.com/a3/55/jjtrOGRq_o.png",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "4",
      rate: 5,
      cover: "https://images2.imgbox.com/56/58/fykOZiiH_o.png",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "5",
      rate: 5,
      cover: "https://images2.imgbox.com/c5/ee/Y5aH6tW9_o.png ",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "6",
      rate: 5,
      cover: "https://images2.imgbox.com/c3/9d/Qa0Q0woO_o.png",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "1",
      rate: 3,
      cover: "https://images2.imgbox.com/b0/16/0ECVsENd_o.png",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      priceWithOutOff: 500000,
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "2",
      rate: 5,
      cover: "https://images2.imgbox.com/7e/d5/XEXLvILW_o.png",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "3",
      rate: 5,
      cover: "https://images2.imgbox.com/a3/55/jjtrOGRq_o.png",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "4",
      rate: 5,
      cover: "https://images2.imgbox.com/56/58/fykOZiiH_o.png",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "5",
      rate: 5,
      cover: "https://images2.imgbox.com/c5/ee/Y5aH6tW9_o.png ",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "6",
      rate: 5,
      cover: "https://images2.imgbox.com/c3/9d/Qa0Q0woO_o.png",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "1",
      rate: 3,
      cover: "https://images2.imgbox.com/b0/16/0ECVsENd_o.png",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      priceWithOutOff: 500000,
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "2",
      rate: 5,
      cover: "https://images2.imgbox.com/7e/d5/XEXLvILW_o.png",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "3",
      rate: 5,
      cover: "https://images2.imgbox.com/a3/55/jjtrOGRq_o.png",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "4",
      rate: 5,
      cover: "https://images2.imgbox.com/56/58/fykOZiiH_o.png",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "5",
      rate: 5,
      cover: "https://images2.imgbox.com/c5/ee/Y5aH6tW9_o.png ",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      header: "دوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
    {
      id: "6",
      rate: 5,
      cover: "https://images2.imgbox.com/c3/9d/Qa0Q0woO_o.png",
      price: 400000,
      usersCount: 1223,
      creator: "ویتو محققیان",
      header: " i iias difias iid iasid iدوره ی پروژه محور جنگو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت  و با استفاده از طراحان گرافیک است، چاپگرها و متون  بلکه روزنامه و مجله در ستون و سطرآن  چنان که لازم است.لورم ایپسوم متن ساختگی با تولیلورم ایپسوم متن ساختگی با تولیلورم ایپسوم  متن ساختگی با تولیلورم ایپسوم متن  با تولید سادگی نامفهوم از صنعت چاپ.",
    },
  ];

  const categoryButtonHandler = (categoryName) => {
    setSelectedCourseCategory(categoryName);
  };

  return (
    <section className={styles.container}>
      <h3>دوره ها و بوت کمپ ها</h3>
      <div className={styles.coursesCategoriesContainer}>
        <div className={styles.coursesCategoriesMainContainer}>
          {courseCategories.map((item) => (
            <CategoryButton
              key={item}
              styles={styles}
              categoryName={item}
              clickHandler={categoryButtonHandler}
              selectedCourseCategory={selectedCourseCategory}
            />
          ))}
        </div>
      </div>
      <div className={styles.courses_parent_containter}>
        <AnimatePresence>
          {projects.map((item) => (
            <AnimtionOnScroll
              key={"description"}
              initial={{ scale: 1.2, opacity: 0 }}
              onScreen={{ scale: 1, opacity: 1 }}
            >
              <Course course={item} />
            </AnimtionOnScroll>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Courses;
