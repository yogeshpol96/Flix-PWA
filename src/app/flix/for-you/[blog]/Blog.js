'use client';
//CODE BY RUSHIKSH
import FlixForYouBlogData from "@/apis/FlixForYouBlogData";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useEffect, useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import RichText from "./RichText";
import ContentFooter from "@/Components/ContentFooter";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

function Blog({ id }) {
  let [response, setReponse] = useState("");

  function getBlogData() {
    FlixForYouBlogData(id)
      .then((data) => {
        setReponse(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <>
      {response.length == 0 ? (
        <h1 className="heading-h1 text-center">Loading...</h1>
      ) : (
        <>
          {/* className="w-full h-screen" */}
          <article className="flix-blog-parent-container ">
            {/* className="border py-10 px-5 relative max-w-[52.7vh] h-full overflow-scroll min-w-[200px] min-h-[200px]  flex flex-col mx-auto pb-[50px]" */}
            <section className="flix-blog-main-container   ">
              <div className="flex flex-col gap-5 pb-[75px]">
                <h1 className={"heading-h1 " + plus_jakarta_sans.className}>
                  {response.Title}
                </h1>
                <RichText data={response.BlogDescription} />
                <h3 className={"heading-h3  " + plus_jakarta_sans.className}>
                  Category : {response.Category}
                </h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="text-center border border-black rounded-full py-2 5 px-4">
                    #FashionTips
                  </div>
                  <div className="text-center border border-black rounded-full py-2 5 px-4">
                    #Lookbooks
                  </div>
                </div>
              </div>
              <ContentFooter positionValue="fixed" backOption="/flix/for-you" />
            </section>
          </article>
        </>
      )}
    </>
  );
}

export default Blog;
