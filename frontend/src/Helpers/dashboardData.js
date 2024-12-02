export const getDashboardData = async () => {
    try {
        const response = await fetch(`http://localhost:8080/data`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Erro ao buscar os dados");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        throw error;
    }
};
