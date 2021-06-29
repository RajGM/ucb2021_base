# Content Type: Article

## Entity Type: Node

## Purpose : for time-sensitive content like news, announcements or blog posts

## Schema.org definition link : https://schema.org/Article

 | Field Display Name | Multivalue | Required | Data Structure | Schema.org Field Name | Express Field Name | Express Data Structure | Notes                                 |
 | :----------------: | :--------: | :------: | :------------: | :-------------------: | :----------------: | :--------------------: | ------------------------------------- |
 |Title | N | Y | text | Content Title | Title | Text | used by pathauto for generating URL | 
 |Body | N | N | Long text | articleBody |  |  |  | 
 |Summary | N | N | Text | abstract |  |  |  | 
 |Date Display | N | Y | list (text) |  -  |  |  | A dropdown to show or hide date. | 
 |Image: Photo | Y | N | Image | image |  |  |  | 
 |Image: Thumbnail | N | N | image | image |  |  |  | 
 |Category | Y | N | Term Reference | keywords |  |  |  | 
 |Tag | Y | N | Term Reference | keywords |  |  |  | 
 |Byline | Y | N | Term Reference | author / contributor |  |  |  | 
 |External URL | N | N | URL/Link |  -  |  |  | takes the place of articleBody |
