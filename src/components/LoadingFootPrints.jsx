import { useState, useEffect } from 'react';
import { LeftFootPrint, RightFootPrint } from './Icons.jsx';

const LoadingFootPrints = ({ 
    size = "default",
    message = "",
    className = "",
    onLoadingComplete = null,
    autoHide = false,
    autoHideDelay = 3000,
    color = "#A65F4A"
}) => {
    const [isVisible, setIsVisible] = useState(true);

    const sizeConfig = {
        small: { iconSize: "w-12 h-12"},
        default: { iconSize: "w-20 h-20"},
        large: { iconSize: "w-28 h-28" }
    };

    const { iconSize } = sizeConfig[size] || sizeConfig.default;

    useEffect(() => {
        if (autoHide && autoHideDelay > 0) {
            const timer = setTimeout(() => {
                setIsVisible(false);
                if (onLoadingComplete) {
                    onLoadingComplete();
                }
            }, autoHideDelay);

            return () => clearTimeout(timer);
        }
    }, [autoHide, autoHideDelay, onLoadingComplete]);

    // Si no es visible, no renderizar nada
    if (!isVisible) {
        return null;
    }
    return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
            <div className="relative flex items-center justify-center space-x-2">
                <div className="absolute left-2 animate-step-right">
                    <RightFootPrint className={`${iconSize} footstep-loader`} fillColor={color} />
                </div>
                <div className="absolute right-2 animate-step-left">
                    <LeftFootPrint className={`${iconSize} footstep-loader`} fillColor={color} />
                </div>
            </div>
            {message && <p className="mt-10 text-center text-lg text-terracota">{message}</p>}
        </div>
    );
};

// Componente de loading para páginas completas
export const PageLoading = () => (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden">
        <div className='max-w-full'>
            <LoadingFootPrints 
                message='Caricamento pagina...'
                size="medium" 
                color='#A65F4A'
            />
        </div>
    </div>
);

// Componente de loading para componentes específicos
export const ComponentLoading = () => (
    <div className="w-full h-full flex items-center justify-center overflow-hidden bg-transparent">
        <LoadingFootPrints 
            size="small"
            color='#D4AF7F'
        />
    </div>
);
