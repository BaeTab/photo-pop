import { forwardRef } from "react";
import PropTypes from "prop-types";

const PhotoFrame = forwardRef(({ photos, frameColor, filterStyle, layout }, ref) => {
    const isGrid = layout === "2x2";
    const isMixed = layout === "mixed";
    const isHorizontal = layout === "horizontal";
    const isSplit = layout === "split";

    // If we don't have 4 photos yet, fill with placeholders
    const displayPhotos = [...photos];
    while (displayPhotos.length < 4) {
        displayPhotos.push(null);
    }

    // Dynamic Width based on layout
    let frameWidth = '220px';
    if (isGrid || isMixed) frameWidth = '400px';
    if (isHorizontal) frameWidth = '1400px'; // Increased to 1400px for even larger photos
    if (isSplit) frameWidth = '500px';

    return (
        <div style={{ padding: '16px', display: 'flex', justifyContent: 'center', overflowX: 'auto' }}>
            <div
                ref={ref}
                style={{
                    position: 'relative', // Necessary for absolute sticker layer
                    width: frameWidth,
                    minHeight: isHorizontal ? '400px' : '600px', // Increased height
                    backgroundColor: frameColor.startsWith('bg-') ? '#ffffff' : frameColor,
                    border: '4px solid #000000',
                    padding: isHorizontal ? '16px' : '24px', // Reduced padding for horizontal to give more space to photos
                    boxShadow: '12px 12px 0px 0px rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexDirection: isHorizontal ? 'row' : 'column',
                    alignItems: 'center',
                    gap: '16px',
                    fontFamily: '"Jua", sans-serif',
                    color: '#000000',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gap: '16px',
                        width: isHorizontal ? 'auto' : '100%',
                        flex: isHorizontal ? '1' : 'none', // Grow to fill space
                        minWidth: 0, // Fix flexbox overflow issue
                        gridTemplateColumns: isHorizontal
                            ? 'repeat(4, 1fr)'
                            : isMixed
                                ? 'repeat(3, 1fr)'
                                : isSplit
                                    ? '2fr 1fr'
                                    : isGrid
                                        ? 'repeat(2, 1fr)'
                                        : '1fr',
                        gridAutoFlow: isSplit ? 'dense' : 'row',
                    }}
                >
                    {displayPhotos.map((src, idx) => {
                        let styleOverrides = {};
                        if (isMixed && idx === 0) {
                            styleOverrides = { gridColumn: '1 / -1', aspectRatio: '16/9' };
                        }
                        if (isSplit && idx === 0) {
                            styleOverrides = { gridRow: 'span 3', height: '100%' };
                        }

                        return (
                            <div
                                key={idx}
                                style={{
                                    aspectRatio: (isMixed && idx === 0) ? '16/9' : '4/3',
                                    border: '2px solid #000000',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#f3f4f6',
                                    backgroundImage: !src ? 'repeating-linear-gradient(45deg, #e5e7eb 25%, transparent 25%, transparent 75%, #e5e7eb 75%, #e5e7eb), repeating-linear-gradient(45deg, #e5e7eb 25%, #f3f4f6 25%, #f3f4f6 75%, #e5e7eb 75%, #e5e7eb)' : 'none',
                                    backgroundPosition: '0 0, 10px 10px',
                                    backgroundSize: '20px 20px',
                                    ...styleOverrides
                                }}
                            >
                                {src ? (
                                    <img
                                        src={src}
                                        alt={`Shot ${idx + 1}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            filter: filterStyle,
                                            transform: 'scaleX(-1)'
                                        }}
                                    />
                                ) : (
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        border: '2px dashed #9ca3af',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#9ca3af',
                                        fontWeight: 'bold'
                                    }}>
                                        {idx + 1}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                <div style={{
                    marginTop: isHorizontal ? '0' : 'auto',
                    textAlign: 'center',
                    writingMode: isHorizontal ? 'vertical-rl' : 'horizontal-tb',
                    textOrientation: 'mixed',
                    flexShrink: 0,
                    fontSize: isHorizontal ? '0.8rem' : '1rem', // Adjust text size slightly if needed
                    padding: isHorizontal ? '0 0 0 8px' : '0', // Add left padding for vertical text spacing
                }}>
                    <h2 style={{
                        fontSize: '1.875rem',
                        fontWeight: '700',
                        color: '#000000',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontFamily: '"Jua", sans-serif'
                    }}>
                        Photo Pop
                    </h2>
                    <p style={{
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        color: '#374151',
                        marginTop: '4px'
                    }}>
                        {new Date().toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
});

PhotoFrame.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    frameColor: PropTypes.string.isRequired,
    filterStyle: PropTypes.string.isRequired,
    layout: PropTypes.string.isRequired,
};

PhotoFrame.displayName = "PhotoFrame";
export default PhotoFrame;
