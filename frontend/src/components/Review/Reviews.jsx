import React, { useState } from "react";
import Button from "../Shared/Button_OnClick";

const ReviewData = [
  {
    id: 1,
    dininghall: "{PlaceHolder}",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "{PlaceHolder}",
    height: "h-[220px]",
  },
  {
    id: 2,
    dininghall: "{PlaceHolder}",
    review:
      "Lorem ipsum dolor sit amet. Et distinctio aliquid sit asperiores nesciunt et suscipit neque eos dolorem repellendus? Qui galisum aliquid vel possimus quae est porro minima et cupiditate voluptatum eos maxime perspiciatis in rerum galisum? Cum consequuntur inventore et mollitia provident et corrupti consectetur est cumque dolor et necessitatibus consectetur cum ipsam tempora eum fugiat mollitia! Non ullam ipsam et voluptas obcaecati qui nobis nesciunt et quos totam qui incidunt facilis aut cumque harum qui provident rerum?Ut rerum porro id inventore voluptas eos repellendus fugiat? Et quibusdam assumenda est doloribus dignissimos quo temporibus laudantium ex rerum dolorem ut commodi sunt est consequatur blanditiis rem dolorum similique. Ut excepturi totam id aliquam consequatur ut maiores consequuntur At nesciunt consequatur a reprehenderit sunt sed similique nihil sed velit velit.Nam sunt ipsum sed magni obcaecati et atque perspiciatis qui error illo ut veniam illum. Et dolore enim aut dicta corporis vel autem similique et adipisci praesentium? Sit velit amet id quis perspiciatis et cumque doloremque sit adipisci consequatur id molestiae recusandae non molestias praesentium non iure voluptates?",
    date: "{PlaceHolder}",
    height: "h-[520px]",
  },
  {
    id: 3,
    dininghall: "{PlaceHolder}",
    review:
      "Lorem ipsum dolor sit amet. Id quia enim sit accusamus modi non cupiditate reprehenderit et repellat esse ut ullam placeat quo ipsam voluptatem. Eum impedit asperiores est laudantium quae ut nulla necessitatibus ea dolores ducimus in animi modi. Ut distinctio quod ut sunt commodi et commodi internos hic doloribus quia qui eaque sunt sit rerum dolor. Hic accusantium voluptates sed quia delectus vel autem totam aut odit iure sed reiciendis reprehenderit in delectus libero et natus sapienteEos ipsam tempora ad illo voluptatibus et cupiditate commodi nam rerum facere aut explicabo asperiores ad alias mollitia. Nam quod ipsum et aliquid harum et nobis iste est dolores voluptates et enim atque non laborum sunt rem debitis corporis! Ab eligendi fugit ut adipisci delectus sed nostrum reprehenderit cum neque repellendus quo dolor voluptatibus in eaque porro. Qui voluptatem veritatis est vero asperiores est iste aliquid.Et rerum corporis sit placeat numquam 33 perferendis adipisci sed adipisci dolorem ut Quis illo. Et dolorum incidunt et voluptas incidunt non earum recusandae sit numquam commodi. Ut maiores vero aut necessitatibus perferendis ut sapiente minus ab omnis ducimus ea dolorum pariatur a mollitia quia ut aliquid quos?Eum laboriosam doloribus non sunt officiis quo recusandae quis vel consequuntur perferendis et autem neque sit minus architecto et voluptatum fugiat. Rem dolor iusto ea repudiandae earum id nihil excepturi.",
    date: "{PlaceHolder}",
    height: "h-[320px]",
  },
  {
    id: 4,
    dininghall: "{PlaceHolder}",
    review:
      "<p>Id voluptatem expedita aut incidunt galisum cum minima earum in quasi ipsam et iste quia ut odio animi nam deleniti placeat. In perspiciatis maxime sit eveniet reprehenderit aut eveniet quibusdam sed commodi mollitia qui praesentium odit et quos suscipit. </p><p>Et deleniti possimus et omnis quia in voluptate pariatur. Et odit delectus ea optio numquam a fugit fugiat aut alias quis quo accusantium impedit. Rem dignissimos vero ad veritatis sint sed galisum sunt et consequatur praesentium qui repudiandae nulla vel dolores explicabo. Sed quas atque est velit quisquam et nostrum fugit ut quam tenetur in error magnam. </p>",
    date: "{PlaceHolder}",
    height: "h-[250px]",
  },
  {
    id: 5,
    dininghall: "{PlaceHolder}",
    review:
      "Eos provident corrupti 33 reprehenderit facilis est eveniet delectus 33 recusandae minus? Et atque dolores eos quia eius aut quam consectetur id saepe sapiente et molestiae quas. Qui dolorum debitis eos blanditiis repellendus et neque dolorem? Est voluptatibus quos et autem vitae est dolorum quia vel reiciendis error aut debitis minus ut perferendis alias est itaque suscipit.",
    date: "{PlaceHolder}",
    height: "h-[420px]",
  },
  {
    id: 6,
    dininghall: "{PlaceHolder}",
    review:
      "Aut illo commodi aut culpa neque eos doloribus expedita. Quo commodi voluptatem est blanditiis repudiandae in placeat dolor ut dolore iusto et voluptates voluptatem et fuga libero ex vero velit. Quo velit dolores rem minus mollitia aut Quis facere aut accusantium vero ea cupiditate aperiam qui libero voluptas qui architecto nihil. Non impedit odit ea quibusdam modi et accusantium omnis est nesciunt natus in corrupti iste. Est iste nostrum est voluptatem harum et maiores excepturi vel voluptatem consequatur et tenetur atque ea exercitationem voluptas aut eligendi repellat. Aut totam saepe et sunt quisquam sit voluptatem quia est expedita perferendis nam asperiores sunt! Qui enim facere et numquam facilis qui eius officiis qui quibusdam delectus non totam obcaecati. Sed beatae magni et autem libero et dolorem adipisci ut fugiat pariatur. Id autem dolor eos fuga architecto et ipsa atque et adipisci nulla 33 quos accusantium qui quia sunt.",
    date: "{PlaceHolder}",
    height: "h-[150px]",
  },
  {
    id: 7,
    dininghall: "{PlaceHolder}",
    review:
      "Aut distinctio quia et quod quia rem quasi autem et cupiditate repellendus ab cupiditate omnis vel eligendi culpa id velit fugit. Est ratione accusantium est earum omnis aut sapiente reiciendis ab internos quis et corrupti quos aut porro dolorem. Qui voluptatem tenetur et porro quisquam rem natus officia aut libero impedit qui maxime ratione. Aut temporibus tempora et error nostrum ut consequatur dolorem qui pariatur expedita qui autem animi. Qui amet doloremque ut magnam consequatur nam dolorum dicta et odit quas est magnam aliquid est quod quaerat sed quia nemo. Id quia culpa aut impedit officiis qui fugit quia eum quam autem. Est odit placeat quo harum consequatur aut dolores illum. A adipisci impedit ea eligendi provident est omnis voluptas et deserunt repellat. Vel perferendis cupiditate in dignissimos itaque et quam numquam aut voluptas accusantium. Et minima neque qui porro consequatur et porro dolores. Sit dolorum corrupti At neque architecto non impedit reprehenderit sit incidunt dolorem sit dolor galisum ut consequatur enim.",
    date: "{PlaceHolder}",
    height: "h-[320px]",
  },
  {
    id: 8,
    dininghall: "{PlaceHolder}",
    review:
      "Ut praesentium dolor qui iusto expedita eum molestias dolor sed ipsa fuga in galisum galisum? Non minima voluptatem a sapiente aliquam est modi veniam id dolorem eligendi et ratione dignissimos et itaque iusto. Ut ducimus ipsam et modi porro rem iusto alias sit soluta aliquam est adipisci eligendi et consequuntur nostrum id dolorum nesciunt. Ad rerum nemo et omnis reiciendis rem natus enim ut dolorum tempora. Ab doloribus neque ut corrupti odio qui deserunt natus est sunt dignissimos in quia voluptatem aut optio neque est quia soluta. Est fugiat error ad sint molestias sit molestiae modi eos harum quos et nisi reprehenderit. Aut voluptate aliquam sit praesentium nostrum eum illo omnis est maiores reiciendis et quam quis. Ut internos consequuntur eos sequi sequi ea error velit in rerum unde. At dicta mollitia non quidem voluptatem et sint iusto sit aspernatur debitis a accusamus error et porro reprehenderit. Quo rerum inventore rem exercitationem aliquam 33 odit numquam et autem dicta est distinctio iste id dolorum rerum. Qui quidem sint aut veritatis recusandae ut blanditiis sunt eum voluptas dignissimos. Ut doloribus aspernatur sit enim harum quo omnis consequatur et beatae corporis cum Quis officiis est quis maxime quo quisquam voluptas. 33 iusto voluptatibus aut exercitationem mollitia hic quaerat esse quo aperiam quas. Sit magni totam a explicabo dolor eum autem asperiores.",
    date: "{PlaceHolder}",
    height: "h-[320px]",
  },
  {
    id: 9,
    dininghall: "{PlaceHolder}",
    review:
      "Sit voluptatem dolores qui sint rerum non blanditiis eius est suscipit sint in dolore sequi et ullam autem ut asperiores consectetur. Ut dolorum soluta et ducimus nostrum ut magni nihil id galisum officia eos tempora veniam et pariatur pariatur sit minima velit. Est saepe velit et voluptatem error aut dolores enim.",
    date: "{PlaceHolder}",
    height: "h-[320px]",
  },
  {
    id: 10,
    dininghall: "{PlaceHolder}",
    review:
      "Et nihil omnis ut blanditiis eaque eos fuga deserunt et laborum enim et eveniet rerum et consectetur voluptatem At quas fugit. Sit omnis voluptatem ad aspernatur veniam et libero accusantium quo nesciunt dolorem. Hic magni delectus et voluptatem nihil est tempore iure aut sint quis et sunt quibusdam. Rem placeat sequi ut maxime minus ut quis praesentium. Id nesciunt ipsa eum necessitatibus autem aut totam repellat sit itaque officiis ut distinctio provident qui totam sapiente. Non galisum maxime aut omnis minus eum nostrum rerum. Sit omnis cumque ut voluptates esse sed recusandae inventore.",
    date: "{PlaceHolder}",
    height: "h-[320px]",
  },
  {
    id: 11,
    dininghall: "{PlaceHolder}",
    review:
      "Est esse consectetur eum aliquid voluptatum vel saepe eveniet. Et internos voluptas est odit voluptatem At voluptatibus laudantium in ullam ipsum eos voluptas asperiores qui deleniti officia. Rem voluptatum voluptatem ab fuga tempore et dolorum impedit aut nemo magni non voluptatem soluta quo aliquam laborum cum libero itaque. Aut voluptatum voluptatem quo ratione laudantium et voluptas voluptate qui dolorem maxime quo deleniti quam qui aliquid dolor. Qui debitis tempora eum placeat commodi hic alias molestias et repellat labore id voluptatem iure eum reprehenderit reiciendis et dicta earum. Nam internos aperiam ut pariatur magni est sint ducimus et sapiente voluptas ad quis reprehenderit et voluptatem exercitationem. Vel numquam voluptatem ea voluptas quis sit culpa reiciendis. Ab eaque dolorum et veritatis accusantium et repudiandae repudiandae eos dolor vitae et cumque tempora? Id eligendi fugit ut aliquam amet est nihil placeat rem quia dolorem. Vel quae dolorem quo rerum autem sit odio magni. Est dolores deserunt sit impedit repellat et molestias officia et provident facere eum nemo illum ad doloribus voluptas. Et atque quia qui itaque voluptatum et nostrum dolorem ut adipisci corporis aut quae enim et blanditiis dolorem.",
    date: "{PlaceHolder}",
    height: "h-[320px]",
  },
  {
    id: 12,
    dininghall: "{PlaceHolder}",
    review:
      "Sit exercitationem voluptas est illum dolorem aut enim reiciendis 33 unde aperiam. Et nobis praesentium et officia tempore hic quae repellat. Qui natus veritatis sit pariatur accusantium ut enim quaerat est nesciunt praesentium vel Quis aliquid ex consequatur tempora et perferendis omnis. Eos reprehenderit modi ea dicta molestias sed corrupti rerum quo nostrum molestiae eum ratione iusto aut quaerat numquam. Qui recusandae illo et internos repudiandae qui dolores numquam. Est dolores facilis sit minus perferendis eos voluptas vero et quidem sunt. Quo amet facilis qui veniam autem est fuga asperiores. Vel magni enim hic consequatur quibusdam id velit tempora eum soluta quos et quis laudantium. Qui nulla ipsum At rerum ratione ea velit laborum et vitae iste sit possimus omnis!",
    date: "{PlaceHolder}",
    height: "h-[320px]",
  },
  {
    id: 13,
    dininghall: "{PlaceHolder}",
    review:
      "Quo distinctio cumque sit quaerat mollitia et omnis possimus a magni minus aut labore dolorum? Aut voluptatum earum eum eius molestiae id rerum omnis non voluptas iure et optio maxime et exercitationem quis aut enim illum. Ut quam quia ab sunt aspernatur in ipsa voluptas. Qui facere nobis eum laboriosam sint non eveniet nostrum eum nulla quibusdam et animi voluptas aut pariatur quisquam. Et odit accusantium est earum reiciendis id saepe illum aut sint sunt ex eligendi delectus. Et mollitia voluptate cum repudiandae alias aut galisum dolor. Est libero repellendus qui magni laboriosam eos doloremque optio. Nam voluptas eaque cum quibusdam sint quo nulla quia. Sed dolore enim sed laborum iure et laudantium doloremque. Est quia aperiam et similique possimus sed tempore fuga eum eius natus aut numquam dignissimos et facere consequuntur aut autem excepturi. Et sequi iste qui dicta magni sed voluptatem maiores et illum perferendis. Aut aliquid numquam aut nisi facere non corrupti magnam ut vero internos. Sed asperiores quasi et illum velit et facere consequuntur. Est quam eius At architecto iure cum molestiae reprehenderit.",
    date: "{PlaceHolder}",
    height: "h-[320px]",
  },
];

const colors = ["bg-gradient-to-br from-black/90 to-black/70"];

const Review = () => {
  const [reviews, setReviews] = useState(ReviewData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    dininghall: "",
    review: "",
    date: "",
  });

  // Function to handle adding a new review
  const handleAddReview = () => {
    setReviews((prevReviews) => [
      ...prevReviews,
      { id: prevReviews.length + 1, ...newReview },
    ]);
    setNewReview({ dininghall: "", review: "", date: "" }); // Reset the form
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      <div className="container flex justify-between items-center py-4 mt-8">
        <div className="text-blue font-bold tracking-widest text-2xl uppercase sm:text-3xl"></div>

        <div className="flex gap-4">
          <Button
            text="Filters"
            bgColor={"bg-primary"}
            textColor={"text-white"}
          />
          <Button
            text="Add Review"
            bgColor={"bg-blue"}
            textColor={"text-white"}
            onClick={() => setIsModalOpen(true)} // Open modal
          />
        </div>
      </div>

      {/* <div className="container">
        {reviews.map((data) => (
          <div
            key={data.id}
            className="sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl  flex items-end mb-4"
          >
            <div>
              <div>
                <p className="text-4xl xl:text-5xl font-bold  mb-2">
                  {data.dininghall}
                </p>
                <p className="text-1xl font-semibold mb-[2px]">{data.review}</p>
                <p className="text-white mt-2">{data.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="px-20 columns-1 sm:columns-2 lg:columns-4 py-10 md:py-20 gap-2">
        {reviews.map((data) => {
          // Generate a random color for each item
          const randomColor = colors[Math.floor(Math.random() * colors.length)];

          return (
            <div
              key={data.id}
              className={`py-10 px-5 border-4 border-black text-black rounded-2xl flex items-end mb-4 break-inside-avoid `}
            >
              <div>
                <div>
                  <p className="text-4xl xl:text-5xl font-bold mb-4">
                    {data.dininghall}
                  </p>
                  <p className="text-1xl font-semibold mb-[2px]">
                    {data.review}
                  </p>
                  <p className="text-black mt-2 font-bold">{data.date}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center z-40">
          <div className="container w-11/12 max-w-[700px] px-10 pb-20 pt-16 rounded-3xl bg-white border-2 border-gray-100 mt-40 mb-48">
            <h1 className="text-5xl font-semibold mb-8">Add a Review</h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddReview();
              }}
            >
              <input
                type="text"
                name="dininghall"
                placeholder="Dining Hall"
                value={newReview.dininghall}
                onChange={(e) =>
                  setNewReview({ ...newReview, dininghall: e.target.value })
                }
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
              />
              <textarea
                className="w-full h-[200px] px-4 py-2 text-lg border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue"
                placeholder="Write your review here..."
                name="review"
                value={newReview.review}
                onChange={(e) =>
                  setNewReview({ ...newReview, review: e.target.value })
                }
                required
              ></textarea>
              <input
                type="date"
                name="date"
                placeholder="Date"
                value={newReview.date}
                onChange={(e) =>
                  setNewReview({ ...newReview, date: e.target.value })
                }
                className="w-full p-2 mb-4 border border-gray-300 rounded mt-4"
                required
              />
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 font-bold text-black"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue font-bold text-white rounded hover:bg-blue-600"
                >
                  Add Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
