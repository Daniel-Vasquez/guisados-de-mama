export const LogoHome = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
          d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
          d="m21 11-8.693-6.761a.5.5 0 0 0-.614 0L3 11"
        />
      </g>
    </svg>
  )
}
