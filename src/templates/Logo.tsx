type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const height = props.xl ? '60' : '50';
  const width = props.xl ? '180' : '150';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl tracking-widest'
    : 'font-semibold text-xl tracking-widest';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <svg width={width} height={height} viewBox="0 0 1338 423" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M267.3 250.775H187.55L147.675 211.45L187.55 172.125H267.3" fill="#6175F6" />
        <path d="M267.3 250.775H187.55L147.675 211.45L187.55 172.125H267.3" stroke="#6175F6" strokeWidth="15.2064" />
        <path d="M267.3 329.425V93.475H347.05L386.925 132.8L347.05 172.125H267.3" fill="#6175F6" />
        <path d="M267.3 329.425V93.475H347.05L386.925 132.8L347.05 172.125H267.3" stroke="#6175F6" strokeWidth="15.2064" />
        <path d="M547.785 190.04C547.785 196.141 546.355 201.718 543.495 206.771C540.73 211.728 536.488 215.732 530.768 218.783C525.143 221.738 518.231 223.216 510.033 223.216H496.162V257.25H468.134V156.435H510.033C518.136 156.435 525 157.865 530.625 160.725C536.345 163.585 540.635 167.541 543.495 172.594C546.355 177.647 547.785 183.462 547.785 190.04ZM507.316 200.908C515.228 200.908 519.185 197.285 519.185 190.04C519.185 182.699 515.228 179.029 507.316 179.029H496.162V200.908H507.316ZM554.469 217.067C554.469 208.773 555.946 201.528 558.902 195.331C561.952 189.134 566.052 184.368 571.2 181.031C576.443 177.694 582.258 176.026 588.646 176.026C594.175 176.026 598.942 177.122 602.946 179.315C606.95 181.508 610.048 184.463 612.241 188.181V177.027H640.269V257.25H612.241V246.096C610.048 249.814 606.902 252.769 602.803 254.962C598.799 257.155 594.08 258.251 588.646 258.251C582.258 258.251 576.443 256.583 571.2 253.246C566.052 249.909 561.952 245.143 558.902 238.946C555.946 232.654 554.469 225.361 554.469 217.067ZM612.241 217.067C612.241 211.919 610.811 207.867 607.951 204.912C605.186 201.957 601.754 200.479 597.655 200.479C593.46 200.479 589.98 201.957 587.216 204.912C584.451 207.772 583.069 211.824 583.069 217.067C583.069 222.215 584.451 226.314 587.216 229.365C589.98 232.32 593.46 233.798 597.655 233.798C601.754 233.798 605.186 232.32 607.951 229.365C610.811 226.41 612.241 222.31 612.241 217.067ZM703.573 233.369V257.25H691.418C670.921 257.25 660.673 247.097 660.673 226.791V200.336H650.806V177.027H660.673V157.579H688.844V177.027H703.43V200.336H688.844V227.22C688.844 229.413 689.321 230.986 690.274 231.939C691.323 232.892 693.039 233.369 695.422 233.369H703.573ZM769.196 176.312C778.348 176.312 785.593 179.41 790.932 185.607C796.366 191.708 799.083 200.002 799.083 210.489V257.25H771.055V214.207C771.055 209.631 769.863 206.056 767.48 203.482C765.096 200.813 761.903 199.478 757.899 199.478C753.704 199.478 750.415 200.813 748.032 203.482C745.648 206.056 744.457 209.631 744.457 214.207V257.25H716.429V151.43H744.457V188.467C746.935 184.844 750.272 181.937 754.467 179.744C758.757 177.456 763.666 176.312 769.196 176.312ZM933.009 177.027L912.56 257.25H881.1L869.946 208.63L858.363 257.25H827.046L806.74 177.027H834.625L843.634 230.223L855.503 177.027H885.533L897.831 230.366L906.697 177.027H933.009ZM936.407 217.067C936.407 208.773 937.885 201.528 940.84 195.331C943.891 189.134 947.99 184.368 953.138 181.031C958.382 177.694 964.197 176.026 970.584 176.026C976.114 176.026 980.88 177.122 984.884 179.315C988.888 181.508 991.987 184.463 994.179 188.181V177.027H1022.21V257.25H994.179V246.096C991.987 249.814 988.841 252.769 984.741 254.962C980.737 257.155 976.018 258.251 970.584 258.251C964.197 258.251 958.382 256.583 953.138 253.246C947.99 249.909 943.891 245.143 940.84 238.946C937.885 232.654 936.407 225.361 936.407 217.067ZM994.179 217.067C994.179 211.919 992.749 207.867 989.889 204.912C987.125 201.957 983.693 200.479 979.593 200.479C975.399 200.479 971.919 201.957 969.154 204.912C966.39 207.772 965.007 211.824 965.007 217.067C965.007 222.215 966.39 226.314 969.154 229.365C971.919 232.32 975.399 233.798 979.593 233.798C983.693 233.798 987.125 232.32 989.889 229.365C992.749 226.41 994.179 222.31 994.179 217.067ZM1124.55 177.027L1073.64 295.431H1043.18L1062.35 253.818L1029.46 177.027H1060.63L1077.5 222.501L1093.81 177.027H1124.55Z" fill="#6175F6" />
      </svg>

    </span>
  );
};

export { Logo };
