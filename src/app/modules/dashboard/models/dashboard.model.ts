export class DashboardModel{
    categoryName: string;
    departments: DeprtmentModel[];
}

export class DeprtmentModel{
    id: number;
    name: string;
    imageUrl: string;
    nOfConsultant: string;
}