interface HeaderProps {
    title: string, 
    label: string, 
}; 

export const Header = ({
    title, 
    label,
}: HeaderProps) => {
  return (
    <div className="flex flex-col gap-y-4 m-2 items-center justify-center">
        <h1>
            {title}
        </h1>
        <p className="text-gray-500 text-sm">
            {label}
        </p>
    </div>
  )
}
