export default function StylistDetail() {
    return (<>
        <section class="stylist_info container  mx-auto row mt-lg-12 mt-2">
            <div class="stylist_info_photo col-5">
                <img src="../assets/images/stylist/brian.png" alt="" />
            </div>
            <div class="align-self-center col">
                <h1 class="fs-4 fw-bold mb-3">Brian
                    <span class="ms-3 fw-normal">造型總監</span>
                </h1>
                <ul class="d-flex list-unstyled mb-6">
                    <li class="px-4 py-1 me-4">大膽創新</li>
                    <li class="px-4 py-1 me-4">前衛</li>
                    <li class="px-4 py-1 me-4">國際獎項</li>
                </ul>
                <p class="mb-6">以大膽創新的設計理念而聞名,擁有超過20年的時尚造型經驗。曾經獲得多個國際設計獎項,包括「2023年度造型師獎」。擅長將前衛的設計元素融入實穿的服裝中,他的作品經常被時尚界的權威刊物所推崇。</p>
                <button class="btn btn-dark px-6 py-2 ">
                    立即預約
                </button>
            </div>
        </section>

        <section class="stylist_project container-fluid px-0 my-lg-14 my-10">
            <h3 class="text-center fs-4 fw-bold mb-2">Project</h3>
            <h4 class="text-center fs-5 mb-7">造型作品</h4>
            <div class="row gx-0">
                <div class="col me-2">
                    <img src="../assets/images/stylist/brian-work-1.jpeg" alt="..." /></div>
                <div class="col  me-2">
                    <img src="../assets/images/stylist/brian-work-2.jpeg" alt="..." /></div>
                <div class="col">
                    <img src="../assets/images/stylist/brian-work-3.jpeg" alt="..." /></div>

            </div>
        </section>

        <section class="stylist_review container m-auto mb-lg-14 mb-12">
            <h3 class="text-center fs-4 fw-bold mb-2">Review</h3>
            <h4 class="text-center fs-5 mb-7">評價回饋</h4>
            <ul class="row list-unstyled mb-7">
                <li class="col ms-3 me-3">
                    <div class="d-flex justify-content-between mb-4">
                        <div class="d-flex">
                            <img class="me-4" src="../assets/images/stylist/brain_review_1.png" alt="" />
                            <div>
                                <p class="mb-1">阿杰</p>
                                <time class="text-gray" datetime="">2024.04.01</time>
                            </div>
                        </div>
                        <div class="d-flex align-self-center ">
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star"></i>
                        </div>
                    </div>
                    <p>Brian的設計超級厲害!每次穿他搭配的衣服都感覺自己像走在時尚尖端,無論是派對還是正式場合,總能讓我引人注目!</p>
                </li>
                <li class="col ms-3 me-3">
                    <div class="d-flex justify-content-between mb-4">
                        <div class="d-flex">
                            <img class="me-4" src="../assets/images/stylist/brain_review_2.png" alt="" />
                            <div>
                                <p class="mb-1">Jason</p>
                                <time class="text-gray" datetime="">2024.03.01</time>
                            </div>
                        </div>
                        <div class="d-flex align-self-center ">
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star"></i>
                        </div>
                    </div>
                    <p>真的很喜歡Brian幫我搭配的造型,風格獨特又實穿,讓我每次出門都充滿自信。CP值超高,強烈推薦給喜歡時尚的朋友們!</p>
                </li>
                <li class="col ms-3 me-3">
                    <div class="d-flex justify-content-between mb-4">
                        <div class="d-flex">
                            <img class="me-4" src="../assets/images/stylist/brain_review_3.png" alt="" />
                            <div>
                                <p class="mb-1">雅馨</p>
                                <time class="text-gray" datetime="">2024.05.01</time>
                            </div>
                        </div>
                        <div class="d-flex align-self-center ">
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star-fill me-1"></i>
                            <i class="bi bi-star"></i>
                        </div>
                    </div>
                    <p>Brian真的是設計界的高手!每次都能給我很好的建議,完全能感受到前衛又實用的完美平衡,太讚了!</p>
                </li>
            </ul>
            <button class="btn btn-dark px-6 py-2 d-block mx-auto">
                立即預約
            </button>
        </section>
    </>)
}