export interface BookInfo{
    items: [
        {
            id: string,
            volumeInfo: 
                {
                    publishedDate: string,
                    subtitle: string,
                    title: string
                }

            
        }
    ];
}