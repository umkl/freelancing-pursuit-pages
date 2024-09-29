import { Routes } from "@/types/routes";
import ProductOfferSection from "./_comps/ProductOfferSection";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Skill } from "@/types/services";
import FancyDivider from "@/comps/dividers";
import BlogItemsSection from "./_comps/BlogItemsSection";
import { Blogs } from "./_data/blogs";
import Image from "next/image";
import TagCluster from "./_comps/TagCluster";
import "@/styles/services-page.css";
import { cn } from "@/utils/cn";
import { serviceProducts } from "./_data/serviceProducts";
import tagsFromJson from "@/data/tags.json";
import HeaderDe from "@/svgs/header-de.svg";
import GobackHeader from "@/comps/header";

const ServicesPage = ({ params }: { params: { lang: string } }) => {
	unstable_setRequestLocale(params.lang);
	const t = useTranslations(Routes.services);
	return (
		<main className="mx-4 tablet:mx-8 above-4k-style relative">
			<section className="h-screen  relative">
				<div className="-mx-8">
					<GobackHeader />
				</div>

				<div className="sticky top-[2rem]">
					<svg
						className="hidden h-auto w-full md:block mb-8"
						width="934"
						height="63"
						viewBox="0 0 934 63"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M31.5502 62H4.97822V46.621H31.5502C35.1902 46.621 38.0719 46.3177 40.1952 45.711C42.3186 45.1043 43.8352 43.7393 44.7452 41.616C45.6552 39.432 46.1102 36.065 46.1102 31.515C46.1102 26.9043 45.6552 23.5373 44.7452 21.414C43.8352 19.2907 42.3186 17.9257 40.1952 17.319C38.0719 16.7123 35.1902 16.409 31.5502 16.409H4.97822V1.03H31.5502C38.2842 1.03 44.1082 2.24333 49.0222 4.67C53.9362 7.036 57.7279 10.494 60.3972 15.044C63.0666 19.594 64.4012 25.0843 64.4012 31.515C64.4012 37.9457 63.0666 43.436 60.3972 47.986C57.7279 52.536 53.9362 56.0243 49.0222 58.451C44.1082 60.817 38.2842 62 31.5502 62ZM17.8092 62H0.701215V1.03H17.8092V62ZM86.0358 62H68.9278V1.03H86.0358V62ZM108.608 62H91.5V1.03H108.608V62ZM145.645 62H96.141V46.621H145.645V62ZM144.28 38.977H96.141V23.689H144.28V38.977ZM145.645 16.409H96.141V1.03H145.645V16.409ZM167.616 62H150.508V1.03H168.708L185.634 23.871L194.552 37.885H195.735L194.916 24.599V1.03H212.024V62H193.824L175.806 38.522L168.071 26.51H166.888L167.616 38.158V62ZM247.089 62.91C240.901 62.91 235.562 62.1517 231.073 60.635C226.583 59.0577 223.125 56.6613 220.699 53.446C218.272 50.17 217.059 45.9537 217.059 40.797V40.251H234.167V42.162C234.167 43.4967 234.44 44.5583 234.986 45.347C235.592 46.075 236.806 46.5907 238.626 46.894C240.446 47.1973 243.267 47.349 247.089 47.349C250.547 47.349 253.095 47.258 254.733 47.076C256.371 46.8333 257.402 46.4693 257.827 45.984C258.312 45.438 258.555 44.71 258.555 43.8C258.555 42.708 258.13 41.889 257.281 41.343C256.492 40.797 254.854 40.3723 252.367 40.069L233.257 37.521C229.495 36.975 226.341 35.974 223.793 34.518C221.245 33.0013 219.334 31.0297 218.06 28.603C216.786 26.1763 216.149 23.325 216.149 20.049C216.149 17.6223 216.664 15.226 217.696 12.86C218.727 10.494 220.395 8.37066 222.701 6.49C225.006 4.54867 228.039 3.00167 231.801 1.849C235.562 0.696332 240.203 0.119999 245.724 0.119999C252.215 0.119999 257.554 1.03 261.74 2.85C265.986 4.60933 269.141 7.15733 271.204 10.494C273.327 13.77 274.389 17.683 274.389 22.233V22.779H257.281V21.414C257.281 19.958 256.947 18.8053 256.28 17.956C255.673 17.1067 254.399 16.5 252.458 16.136C250.577 15.772 247.726 15.59 243.904 15.59C240.992 15.59 238.777 15.7417 237.261 16.045C235.744 16.2877 234.682 16.682 234.076 17.228C233.53 17.774 233.257 18.502 233.257 19.412C233.257 20.0187 233.378 20.5647 233.621 21.05C233.924 21.4747 234.379 21.8083 234.986 22.051C235.653 22.2937 236.533 22.506 237.625 22.688L256.735 25.509C261.709 26.237 265.562 27.511 268.292 29.331C271.022 31.0903 272.933 33.1833 274.025 35.61C275.117 38.0367 275.663 40.5543 275.663 43.163C275.663 46.621 274.692 49.8667 272.751 52.9C270.87 55.8727 267.837 58.2993 263.651 60.18C259.465 62 253.944 62.91 247.089 62.91ZM317.031 62H299.923V1.03H317.031V62ZM338.507 16.409H278.356V1.03H338.507V16.409ZM359.747 62H342.639V1.03H359.747V62ZM394.964 62H347.371V46.621H394.964V62ZM416.622 62H399.514V1.03H416.622V62ZM453.659 62H404.155V46.621H453.659V62ZM452.294 38.977H404.155V23.689H452.294V38.977ZM453.659 16.409H404.155V1.03H453.659V16.409ZM475.63 62H458.522V1.03H475.63V62ZM510.669 62.91C504.481 62.91 499.142 62.1517 494.653 60.635C490.163 59.0577 486.705 56.6613 484.279 53.446C481.852 50.17 480.639 45.9537 480.639 40.797V40.251H497.747V42.162C497.747 43.4967 498.02 44.5583 498.566 45.347C499.172 46.075 500.386 46.5907 502.206 46.894C504.026 47.1973 506.847 47.349 510.669 47.349C514.127 47.349 516.675 47.258 518.313 47.076C519.951 46.8333 520.982 46.4693 521.407 45.984C521.892 45.438 522.135 44.71 522.135 43.8C522.135 42.708 521.71 41.889 520.861 41.343C520.072 40.797 518.434 40.3723 515.947 40.069L496.837 37.521C493.075 36.975 489.921 35.974 487.373 34.518C484.825 33.0013 482.914 31.0297 481.64 28.603C480.366 26.1763 479.729 23.325 479.729 20.049C479.729 17.6223 480.244 15.226 481.276 12.86C482.307 10.494 483.975 8.37066 486.281 6.49C488.586 4.54867 491.619 3.00167 495.381 1.849C499.142 0.696332 503.783 0.119999 509.304 0.119999C515.795 0.119999 521.134 1.03 525.32 2.85C529.566 4.60933 532.721 7.15733 534.784 10.494C536.907 13.77 537.969 17.683 537.969 22.233V22.779H520.861V21.414C520.861 19.958 520.527 18.8053 519.86 17.956C519.253 17.1067 517.979 16.5 516.038 16.136C514.157 15.772 511.306 15.59 507.484 15.59C504.572 15.59 502.357 15.7417 500.841 16.045C499.324 16.2877 498.262 16.682 497.656 17.228C497.11 17.774 496.837 18.502 496.837 19.412C496.837 20.0187 496.958 20.5647 497.201 21.05C497.504 21.4747 497.959 21.8083 498.566 22.051C499.233 22.2937 500.113 22.506 501.205 22.688L520.315 25.509C525.289 26.237 529.142 27.511 531.872 29.331C534.602 31.0903 536.513 33.1833 537.605 35.61C538.697 38.0367 539.243 40.5543 539.243 43.163C539.243 46.621 538.272 49.8667 536.331 52.9C534.45 55.8727 531.417 58.2993 527.231 60.18C523.045 62 517.524 62.91 510.669 62.91ZM580.611 62H563.503V1.03H580.611V62ZM602.087 16.409H541.936V1.03H602.087V16.409ZM636.977 62.91C629.879 62.91 624.024 61.8483 619.414 59.725C614.864 57.541 611.466 54.4773 609.222 50.534C606.977 46.53 605.855 41.8283 605.855 36.429V1.03H622.963V35.064C622.963 37.976 623.327 40.251 624.055 41.889C624.783 43.527 626.148 44.6797 628.15 45.347C630.212 46.0143 633.155 46.348 636.977 46.348C640.859 46.348 643.802 46.0143 645.804 45.347C647.806 44.6797 649.171 43.527 649.899 41.889C650.627 40.251 650.991 37.976 650.991 35.064V1.03H668.099V36.429C668.099 41.8283 666.976 46.53 664.732 50.534C662.487 54.4773 659.059 57.541 654.449 59.725C649.899 61.8483 644.075 62.91 636.977 62.91ZM690.333 62H673.225V1.03H691.425L708.351 23.871L717.269 37.885H718.452L717.633 24.599V1.03H734.741V62H716.541L698.523 38.522L690.788 26.51H689.605L690.333 38.158V62ZM769.714 62.91C763.344 62.91 757.884 61.636 753.334 59.088C748.784 56.4793 745.296 52.8393 742.869 48.168C740.503 43.436 739.32 37.885 739.32 31.515C739.32 25.145 740.716 19.6243 743.506 14.953C746.297 10.221 750.331 6.581 755.609 4.033C760.887 1.42433 767.227 0.119999 774.628 0.119999C781.544 0.119999 787.459 1.09067 792.373 3.032C797.287 4.97333 801.049 7.76399 803.657 11.404C806.266 14.9833 807.57 19.2907 807.57 24.326V24.963H788.46V24.326C788.46 21.4747 787.429 19.4727 785.366 18.32C783.304 17.1067 779.573 16.5 774.173 16.5C769.805 16.5 766.408 16.9247 763.981 17.774C761.615 18.5627 759.947 20.049 758.976 22.233C758.006 24.3563 757.52 27.4503 757.52 31.515C757.52 35.519 757.975 38.613 758.885 40.797C759.795 42.981 761.373 44.4977 763.617 45.347C765.923 46.1357 769.138 46.53 773.263 46.53C778.177 46.53 781.878 46.3783 784.365 46.075C786.853 45.711 788.491 44.983 789.279 43.891C790.129 42.7383 790.553 40.979 790.553 38.613V35.246L807.661 34.882V36.156L792.828 48.987H790.826C790.28 51.353 789.249 53.5977 787.732 55.721C786.276 57.8443 784.092 59.5733 781.18 60.908C778.329 62.2427 774.507 62.91 769.714 62.91ZM807.661 62H791.736V44.619L790.553 42.708V29.513H807.661V62ZM807.661 41.252H771.625V28.694H807.661V41.252ZM829.854 62H812.746V1.03H829.854V62ZM866.891 62H817.387V46.621H866.891V62ZM865.526 38.977H817.387V23.689H865.526V38.977ZM866.891 16.409H817.387V1.03H866.891V16.409ZM888.862 62H871.754V1.03H889.954L906.88 23.871L915.798 37.885H916.981L916.162 24.599V1.03H933.27V62H915.07L897.052 38.522L889.317 26.51H888.134L888.862 38.158V62Z"
							fill="#EEEEEE"
							className="fill-neutral-900 dark:fill-neutral-100"
						/>
					</svg>
					<div className="grid grid-cols-1 w-full h-fit gap-4 mx-auto tablet:ml-auto tablet:mr-0  laptop:grid-cols-4  laptop-lg:max-w-full art-footer-parent">
						<Image
							src={"/imgs/illustrations/Frontend-Art-Poster.png"}
							alt={"Frontend Illustration"}
							width={300}
							height={300}
						/>
						<Image
							src={"/imgs/illustrations/Backend-Art-Poster.png"}
							alt={"Backend Illustration"}
							width={300}
							height={300}
						/>
						<Image
							src={"/imgs/illustrations/Brand-Art-Poster.png"}
							alt={"Brand Illustration"}
							width={300}
							height={300}
						/>
						<Image
							src={"/imgs/illustrations/UX-Art-Poster.png"}
							alt={"UX Illustration"}
							width={300}
							height={300}
						/>
					</div>
					<div className="h-[2rem]"></div>
				</div>
				<div>
					<p>
						Sick of thinking about font sizes and marketing to the right
						audience?
					</p>
				</div>
			</section>
			<div className=" flex w-full justify-between bottom-[2rem] my-8 sticky top-[2rem]">
				<p className="font-bold">Was darf’s denn sein?</p>
				<p className="font-bold">DIENSTLEISTUNGEN</p>
			</div>
			<div>
				<section
					className="h-screen rounded-2xl border bg-neutral-200 dark:bg-neutral-800 border-neutral-100 -mx-8 sticky px-8 mb-[20rem]"
					style={{ top: "calc(20vh)" }}
				>
					<div>
						<h2 className="font-clash font-bold text-neutral-800 dark:text-neutral-200 text-[5rem] uppercase py-4  ">
							Web Development
						</h2>
						<p>
							A website developed to captivate and convert can elevate your
							brand to new heights. My custom-coded sites are meticulously
							crafted to reflect your unique identity, delivering seamless
							experiences with a focus on animation—keeping your audience
							engaged and returning.
						</p>
					</div>
				</section>
				<section
					className="h-screen rounded-2xl border px-8 border-neutral-100 bg-neutral-200 dark:bg-neutral-800 -mx-8 sticky top-[10rem] mb-[10rem]"
					style={{ top: "calc(20vh + 10rem)" }}
				>
					<div>
						<h2 className="font-clash font-bold text-neutral-800 dark:text-neutral-200 text-[5rem] uppercase py-4 ">
							Web Development
						</h2>
						<p>
							A website developed to captivate and convert can elevate your
							brand to new heights. My custom-coded sites are meticulously
							crafted to reflect your unique identity, delivering seamless
							experiences with a focus on animation—keeping your audience
							engaged and returning.
						</p>
					</div>
				</section>
				<section
					className="h-screen rounded-2xl border px-8 border-neutral-100 bg-neutral-200 dark:bg-neutral-800 -mx-8 sticky top-[20rem] mb-[0rem]"
					style={{ top: "calc(20vh +20rem)" }}
				>
					<div>
						<h2 className="font-clash font-bold text-neutral-800 dark:text-neutral-200 text-[5rem] uppercase py-4 ">
							Web Development
						</h2>
						<p>
							A website developed to captivate and convert can elevate your
							brand to new heights. My custom-coded sites are meticulously
							crafted to reflect your unique identity, delivering seamless
							experiences with a focus on animation—keeping your audience
							engaged and returning.
						</p>
					</div>
				</section>
			</div>
			<div className="h-[300px]"></div>
		</main>
	);
};

export default ServicesPage;
