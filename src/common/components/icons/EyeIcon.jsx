export const EyeIcon = ({ width = 18, height = 18, ...props }) => {
    return (
        <>
            <svg width={ width } height={ height } { ...props } viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99888 6.94509C9.53621 6.94509 10.0515 7.16182 10.4315 7.54761C10.8114 7.9334 11.0249 8.45664 11.0249 9.00223C11.0249 9.54782 10.8114 10.0711 10.4315 10.4569C10.0515 10.8426 9.53621 11.0594 8.99888 11.0594C8.46156 11.0594 7.94625 10.8426 7.5663 10.4569C7.18636 10.0711 6.97291 9.54782 6.97291 9.00223C6.97291 8.45664 7.18636 7.9334 7.5663 7.54761C7.94625 7.16182 8.46156 6.94509 8.99888 6.94509ZM8.99888 3.85938C12.3755 3.85938 15.2591 5.99195 16.4275 9.00223C15.2591 12.0125 12.3755 14.1451 8.99888 14.1451C5.62226 14.1451 2.73862 12.0125 1.57031 9.00223C2.73862 5.99195 5.62226 3.85938 8.99888 3.85938ZM3.04252 9.00223C4.15681 11.3062 6.45966 12.7737 8.99888 12.7737C11.5381 12.7737 13.841 11.3062 14.9552 9.00223C13.841 6.69823 11.5381 5.2308 8.99888 5.2308C6.45966 5.2308 4.15681 6.69823 3.04252 9.00223Z" fill="currentColor" />
            </svg>
        </>
    );
};