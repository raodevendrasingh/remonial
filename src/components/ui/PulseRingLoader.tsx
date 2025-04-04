import type React from "react";

const PulseRingLoader: React.FC<{ className?: string }> = ({ className = "" }) => {
	return (
		<svg
			width="80"
			height="80"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<title>ring</title>
			<style>
				{`
          .spinner_Uvk8 {
            animation: spinner_otJF 1.6s cubic-bezier(.52,.6,.25,.99) infinite;
          }
          .spinner_ypeD {
            animation-delay: .2s;
          }
          .spinner_y0Rj {
            animation-delay: .4s;
          }
          @keyframes spinner_otJF {
            0% {
              transform: translate(12px,12px) scale(0);
              opacity: 1;
            }
            75%, 100% {
              transform: translate(0,0) scale(1);
              opacity: 0;
            }
          }
        `}
			</style>
			<path
				className="spinner_Uvk8"
				d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
				transform="translate(12, 12) scale(0)"
			/>
			<path
				className="spinner_Uvk8 spinner_ypeD"
				d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
				transform="translate(12, 12) scale(0)"
			/>
			<path
				className="spinner_Uvk8 spinner_y0Rj"
				d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
				transform="translate(12, 12) scale(0)"
			/>
		</svg>
	);
};

export default PulseRingLoader;
