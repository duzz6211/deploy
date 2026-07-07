import useReveal from '../hooks/useReveal'

/** Dotted world map with animated route lines (draw on reveal) and pulsing nodes. */
export default function WorldMap({ maskId = 'worldMask', patternId = 'dotPattern' }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="map-wrap reveal" aria-hidden="true">
      <svg viewBox="0 0 920 640" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="6" cy="6" r="5.4" fill="#e4e4e4" />
          </pattern>
          <mask id={maskId}>
            <rect width="920" height="640" fill="black" />
            <path fill="white" d="M78 142 C120 110 172 118 206 82 C238 48 304 64 318 112 C342 113 366 135 366 162 C398 166 412 190 398 212 C376 247 335 238 318 270 C303 300 250 296 226 268 C188 292 136 270 125 236 C82 234 48 210 54 176 C56 160 64 150 78 142Z" />
            <path fill="white" d="M292 332 C330 322 380 342 394 380 C405 410 385 438 358 452 C354 488 332 514 318 552 C304 592 278 582 276 540 C274 500 258 470 244 440 C230 410 236 370 260 350 C270 342 280 336 292 332Z" />
            <path fill="white" d="M548 172 C584 144 632 150 658 178 C690 162 724 172 738 202 C754 232 728 258 696 248 C674 282 628 284 608 254 C574 264 536 246 526 214 C522 198 532 184 548 172Z" />
            <path fill="white" d="M578 292 C624 262 686 276 712 322 C742 376 708 432 676 462 C660 490 658 538 628 552 C604 526 598 484 574 452 C544 412 530 356 552 318 C558 306 566 298 578 292Z" />
            <path fill="white" d="M706 176 C750 130 830 130 874 172 C924 218 894 294 834 304 C796 312 762 288 736 264 C706 236 682 204 706 176Z" />
            <path fill="white" d="M790 112 C842 72 912 104 930 162 C954 240 894 284 828 260 C790 246 760 208 766 166 C768 144 776 126 790 112Z" />
            <path fill="white" d="M812 444 C852 412 912 424 936 466 C960 506 928 548 878 544 C838 540 804 520 790 488 C784 470 794 454 812 444Z" />
            <path fill="white" d="M368 36 C410 8 470 24 486 70 C498 104 466 132 424 128 C384 124 354 94 350 60 C348 50 356 42 368 36Z" />
            <circle cx="530" cy="104" r="16" fill="white" />
            <circle cx="500" cy="192" r="10" fill="white" />
            <circle cx="462" cy="176" r="9" fill="white" />
          </mask>
        </defs>

        <rect width="920" height="640" fill={`url(#${patternId})`} mask={`url(#${maskId})`} />

        <path className="route" d="M260 292 C350 210, 470 220, 582 274" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" />
        <circle className="node" cx="260" cy="292" r="8" fill="#111" />
        <circle className="node n2" cx="582" cy="274" r="8" fill="#111" />

        <path className="route" d="M562 238 C654 170, 800 186, 924 268" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" />
        <circle className="node n3" cx="562" cy="238" r="8" fill="#111" />
      </svg>
    </div>
  )
}
