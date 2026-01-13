interface GradientHeadingProps {
  part1: string
  part2: string
  subtitle?: string
  splitLines?: boolean
}

export const GradientHeading = ({ 
  part1, 
  part2, 
  subtitle,
  splitLines = false 
}: GradientHeadingProps) => {
  if (splitLines) {
    return (
      <div className="text-center mb-12">
        <h2 className="font-heading font-medium leading-tight mb-4">
          <div 
            style={{ 
              color: 'rgb(38, 31, 46)'
            }}
            className="text-[36px] md:text-[72px]"
          >
            {part1}
          </div>
          <div 
            style={{ 
              background: 'linear-gradient(135deg, hsl(270 50% 65%) 0%, hsl(340 50% 75%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            className="text-[36px] md:text-[72px]"
          >
            {part2}
          </div>
        </h2>
        {subtitle && (
          <p className="font-body text-lg text-brand-brown/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="text-center mb-12">
      <h2 className="font-heading font-medium leading-tight mb-4">
        <span 
          style={{ 
            color: 'rgb(38, 31, 46)'
          }}
          className="text-[36px] md:text-[72px]"
        >
          {part1}{' '}
        </span>
        <span 
          style={{ 
            background: 'linear-gradient(135deg, hsl(270 50% 65%) 0%, hsl(340 50% 75%) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
          className="text-[36px] md:text-[72px]"
        >
          {part2}
        </span>
      </h2>
      {subtitle && (
        <p className="font-body text-lg text-brand-brown/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
