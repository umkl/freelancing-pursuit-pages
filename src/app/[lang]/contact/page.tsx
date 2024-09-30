import Image from "next/image";
import "@/styles/glowing-button.css";
import Mail from "@/svgs/mail.svg";
import Camera from "@/svgs/camera.svg";

export default function ContactPage() {
	return (
		<>
			<svg
				width="768"
				height="82"
				viewBox="0 0 768 82"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="hidden h-auto w-full md:block mb-8 absolute z-0 top-1/3"
			>
				<path
					className="fill-neutral-800"
					d="M-38.386 21.032H-9.83799V43.496H-38.386V21.032ZM-18.964 1.61H-10.891V15.182H-18.262C-19.666 15.182 -20.719 15.455 -21.421 16.001C-22.045 16.547 -22.357 17.678 -22.357 19.394V23.723H-38.386V19.511C-38.386 13.505 -36.709 9.02 -33.355 6.056C-29.923 3.092 -25.126 1.61 -18.964 1.61ZM-3.988 21.032H24.56V43.496H-3.988V21.032ZM15.434 1.61H23.507V15.182H16.136C14.732 15.182 13.679 15.455 12.977 16.001C12.353 16.547 12.041 17.678 12.041 19.394V23.723H-3.988V19.511C-3.988 13.505 -2.311 9.02 1.04301 6.056C4.47501 3.092 9.27201 1.61 15.434 1.61ZM51.5468 80H26.8598L60.6728 1.61H92.1458L126.076 80H100.804L82.2008 34.721L77.0528 21.5H75.5318L70.5008 34.721L51.5468 80ZM104.665 65.492H46.8668V45.719H104.665V65.492ZM167.976 81.17C158.85 81.17 151.323 79.805 145.395 77.075C139.545 74.267 135.177 70.328 132.291 65.258C129.405 60.11 127.962 54.065 127.962 47.123V1.61H149.958V45.368C149.958 49.112 150.426 52.037 151.362 54.143C152.298 56.249 154.053 57.731 156.627 58.589C159.279 59.447 163.062 59.876 167.976 59.876C172.968 59.876 176.751 59.447 179.325 58.589C181.899 57.731 183.654 56.249 184.59 54.143C185.526 52.037 185.994 49.112 185.994 45.368V1.61H207.99V47.123C207.99 54.065 206.547 60.11 203.661 65.258C200.775 70.328 196.368 74.267 190.44 77.075C184.59 79.805 177.102 81.17 167.976 81.17ZM236.577 80H214.581V1.61H236.577V80ZM282.909 52.739H220.548V33.083H282.909V52.739ZM284.664 21.383H220.548V1.61H284.664V21.383ZM344.695 81.17C336.505 81.17 329.485 79.532 323.635 76.256C317.785 72.902 313.3 68.222 310.18 62.216C307.138 56.132 305.617 48.995 305.617 40.805C305.617 32.615 307.411 25.517 310.999 19.511C314.587 13.427 319.774 8.747 326.56 5.471C333.346 2.117 341.497 0.439999 351.013 0.439999C359.905 0.439999 367.51 1.688 373.828 4.184C380.146 6.68 384.982 10.268 388.336 14.948C391.69 19.55 393.367 25.088 393.367 31.562V32.381H368.797V31.562C368.797 27.896 367.471 25.322 364.819 23.84C362.167 22.28 357.37 21.5 350.428 21.5C344.812 21.5 340.444 22.046 337.324 23.138C334.282 24.152 332.137 26.063 330.889 28.871C329.641 31.601 329.017 35.579 329.017 40.805C329.017 45.953 329.602 49.931 330.772 52.739C331.942 55.547 333.97 57.497 336.856 58.589C339.82 59.603 343.954 60.11 349.258 60.11C355.576 60.11 360.334 59.915 363.532 59.525C366.73 59.057 368.836 58.121 369.85 56.717C370.942 55.235 371.488 52.973 371.488 49.931V45.602L393.484 45.134V46.772L374.413 63.269H371.839C371.137 66.311 369.811 69.197 367.861 71.927C365.989 74.657 363.181 76.88 359.437 78.596C355.771 80.312 350.857 81.17 344.695 81.17ZM393.484 80H373.009V57.653L371.488 55.196V38.231H393.484V80ZM393.484 53.324H347.152V37.178H393.484V53.324ZM422.017 80H400.021V1.61H422.017V80ZM469.636 80H405.988V60.227H469.636V80ZM467.881 50.399H405.988V30.743H467.881V50.399ZM469.636 21.383H405.988V1.61H469.636V21.383ZM556.384 80H534.388V1.61H556.384V80ZM497.884 80H475.888V1.61H497.884V80ZM545.737 50.516H481.621V30.743H545.737V50.516ZM611.38 80H589.384V1.61H611.38V80ZM638.992 21.383H561.655V1.61H638.992V21.383ZM672.852 24.074H644.304V1.61H672.852V24.074ZM653.43 43.496H645.357V29.924H652.728C654.132 29.924 655.146 29.651 655.77 29.105C656.472 28.559 656.823 27.428 656.823 25.712V21.383H672.852V25.595C672.852 31.601 671.136 36.086 667.704 39.05C664.35 42.014 659.592 43.496 653.43 43.496ZM717.864 81.17C709.908 81.17 703.044 80.195 697.272 78.245C691.5 76.217 687.054 73.136 683.934 69.002C680.814 64.79 679.254 59.369 679.254 52.739V52.037H701.25V54.494C701.25 56.21 701.601 57.575 702.303 58.589C703.083 59.525 704.643 60.188 706.983 60.578C709.323 60.968 712.95 61.163 717.864 61.163C722.31 61.163 725.586 61.046 727.692 60.812C729.798 60.5 731.124 60.032 731.67 59.408C732.294 58.706 732.606 57.77 732.606 56.6C732.606 55.196 732.06 54.143 730.968 53.441C729.954 52.739 727.848 52.193 724.65 51.803L700.08 48.527C695.244 47.825 691.188 46.538 687.912 44.666C684.636 42.716 682.179 40.181 680.541 37.061C678.903 33.941 678.084 30.275 678.084 26.063C678.084 22.943 678.747 19.862 680.073 16.82C681.399 13.778 683.544 11.048 686.508 8.63C689.472 6.134 693.372 4.145 698.208 2.663C703.044 1.181 709.011 0.439999 716.109 0.439999C724.455 0.439999 731.319 1.61 736.701 3.95C742.161 6.21199 746.217 9.48799 748.869 13.778C751.599 17.99 752.964 23.021 752.964 28.871V29.573H730.968V27.818C730.968 25.946 730.539 24.464 729.681 23.372C728.901 22.28 727.263 21.5 724.767 21.032C722.349 20.564 718.683 20.33 713.769 20.33C710.025 20.33 707.178 20.525 705.228 20.915C703.278 21.227 701.913 21.734 701.133 22.436C700.431 23.138 700.08 24.074 700.08 25.244C700.08 26.024 700.236 26.726 700.548 27.35C700.938 27.896 701.523 28.325 702.303 28.637C703.161 28.949 704.292 29.222 705.696 29.456L730.266 33.083C736.662 34.019 741.615 35.657 745.125 37.997C748.635 40.259 751.092 42.95 752.496 46.07C753.9 49.19 754.602 52.427 754.602 55.781C754.602 60.227 753.354 64.4 750.858 68.3C748.44 72.122 744.54 75.242 739.158 77.66C733.776 80 726.678 81.17 717.864 81.17ZM822.765 24.074H794.217V1.61H822.765V24.074ZM803.343 43.496H795.27V29.924H802.641C804.045 29.924 805.059 29.651 805.683 29.105C806.385 28.559 806.736 27.428 806.736 25.712V21.383H822.765V25.595C822.765 31.601 821.049 36.086 817.617 39.05C814.263 42.014 809.505 43.496 803.343 43.496ZM788.367 24.074H759.819V1.61H788.367V24.074ZM768.945 43.496H760.872V29.924H768.243C769.647 29.924 770.661 29.651 771.285 29.105C771.987 28.559 772.338 27.428 772.338 25.712V21.383H788.367V25.595C788.367 31.601 786.651 36.086 783.219 39.05C779.865 42.014 775.107 43.496 768.945 43.496Z"
					fill="white"
				/>
			</svg>

			<div className=" relative h-fit flex flex-col w-full">
				<p className="mx-4 text-center font-bold tracking-tight  text-lgp mb-4 mt-4 ">
					Are you ready for reaching an audience?
				</p>
				{/* <div className="rounded-full px-4 py-2  font-bold border-neutral-800 border-[0.2rem] uppercase font-clash block w-fit mx-auto">
				next step :
			</div> */}
				<div className="relative w-fit mx-auto ">
					{/* <div className="h-full w-full absolute bg-gradient-to-t from-neutral-100/100 via-20% via-neutral-100/20 to-30% to-neutral-200/0 z-40"></div> */}
					<Image
						src={"/imgs/matrix.png"}
						className="z-10"
						alt={"Matrix Image"}
						width={800}
						height={900}
					/>
					<a href="https://calendly.com/umkl/talk">
						<button className="bottom-[20%] left-2 cursor-pointer absolute flex gap-4 justify-center border-[0.2rem] border-neutral-500/30 ring-1 ring-neutral-400/30 items-center bg-neutral-700/60 backdrop-blur-sm text-neutral-200 text-base p-2 md:p-4 rounded-lg font-bold text-nowrap z-50">
							<div className="button-bg-glow button-bg-red"></div>
							<svg
								width="22"
								height="16"
								viewBox="0 0 22 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke=""
									className="stroke-neutral-200"
									d="M14.75 6.5L19.47 1.78C19.5749 1.67524 19.7085 1.60392 19.8539 1.57503C19.9993 1.54615 20.15 1.561 20.2869 1.61771C20.4239 1.67442 20.541 1.77045 20.6234 1.89367C20.7058 2.01688 20.7499 2.16176 20.75 2.31V13.69C20.7499 13.8382 20.7058 13.9831 20.6234 14.1063C20.541 14.2295 20.4239 14.3256 20.2869 14.3823C20.15 14.439 19.9993 14.4538 19.8539 14.425C19.7085 14.3961 19.5749 14.3248 19.47 14.22L14.75 9.5M3.5 14.75H12.5C13.0967 14.75 13.669 14.5129 14.091 14.091C14.5129 13.669 14.75 13.0967 14.75 12.5V3.5C14.75 2.90326 14.5129 2.33097 14.091 1.90901C13.669 1.48705 13.0967 1.25 12.5 1.25H3.5C2.90326 1.25 2.33097 1.48705 1.90901 1.90901C1.48705 2.33097 1.25 2.90326 1.25 3.5V12.5C1.25 13.0967 1.48705 13.669 1.90901 14.091C2.33097 14.5129 2.90326 14.75 3.5 14.75Z"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							book a call
						</button>
					</a>
					<a href="https://google.com">
						<button className="bottom-[20%] cursor-pointer right-2 absolute flex gap-4 justify-center items-center bg-neutral-700/60 border-[0.2rem] border-neutral-500/30 ring-1 ring-neutral-400/30 z-30 backdrop-blur-sm text-neutral-200 text-base p-2 md:p-4 rounded-lg font-bold z-20 text-nowrap">
							<div className="button-bg-glow button-bg-blue"></div>
							<svg
								width="22"
								height="18"
								viewBox="0 0 22 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M20.75 3.75V14.25C20.75 14.8467 20.5129 15.419 20.091 15.841C19.669 16.2629 19.0967 16.5 18.5 16.5H3.5C2.90326 16.5 2.33097 16.2629 1.90901 15.841C1.48705 15.419 1.25 14.8467 1.25 14.25V3.75M20.75 3.75C20.75 3.15326 20.5129 2.58097 20.091 2.15901C19.669 1.73705 19.0967 1.5 18.5 1.5H3.5C2.90326 1.5 2.33097 1.73705 1.90901 2.15901C1.48705 2.58097 1.25 3.15326 1.25 3.75M20.75 3.75V3.993C20.75 4.37715 20.6517 4.75491 20.4644 5.0903C20.2771 5.42569 20.0071 5.70754 19.68 5.909L12.18 10.524C11.8252 10.7425 11.4167 10.8582 11 10.8582C10.5833 10.8582 10.1748 10.7425 9.82 10.524L2.32 5.91C1.99292 5.70854 1.72287 5.42669 1.53557 5.0913C1.34827 4.75591 1.24996 4.37815 1.25 3.994V3.75"
									stroke="white"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							message me
						</button>
					</a>
				</div>
				<p className="text-center mx-auto font-bold text-lg tablet:mt-[4rem] mt-[1.4rem]">
					See new creations on{" "}
					<a href="https://www.instagram.com/umkvenz">
						<span className="bg-gradient-to-r from-[#F5BE5B] h-[40px] underline to-[#FF1BCA] bg-clip-text text-transparent">
							Instagram
						</span>
					</a>
					.
				</p>
			</div>
		</>
	);
}
