interface Company {
    id: number;
    name: string;
    employees: Employee[];
}

interface Employee {
    id: number;
    name: string;
    companyId: number;
}

// Add other properties as needed
