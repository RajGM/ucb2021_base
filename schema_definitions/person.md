# Content Type: Person

## Entity Type: Node

## Purpose: Create individual people pages with bios, contact information, research interests, etc. Tag persons with Job Type, Department, other user defined tags, for grouping/sorting in the People List Pages. 

## Schema.org definition link : https://schema.org/Person

 | Field Display Name | Multivalue | Required | Data Structure | Schema.org Field Name | Express Field Name | Express Data Structure | Notes |
 | :----------------: | :--------: | :------: | :------------: | :-------------------: | :----------------: | :--------------------: | ----- |
 | First Name | N | Y | text | givenName | First Name | text |  | 
 | Last Name | N | Y | text | familyName | Last Name | text |  | 
 | Job Type | Y | N | term reference |  | Job Type | term reference | Vocabulary: Job Type | 
 | Job Title | Y | N | text | jobTitle | Title | text |  | 
 | Department | Y | N | term reference | affiliation | Department | term reference | Vocabulary: Department | 
 | Photo | N | N | image | image | Photo | image |  | 
 | Email | N | N | email | email | Email | email |  | 
 | Phone | N | N | text | telephone | Phone | text |  | 
 | Links | Y | N | link | URL | Links | link | Linkit enabled | 
 | Address | N | N | long text | address | Address | long text |  | 
 | Office Hours | N | N | long text |  | Office Hours | long text |  | 
 | Body | N | N | long text & summary |  | Body | long text & summary |  | 
 | Filter 1 | Y | N | term reference | affiliation | Filter 1 | term reference | Vocabulary: Filter1 | 
 | Filter 2 | Y | N | term reference | affiliation | Filter 2 | term reference | Vocabulary: Filter2 | 
 | Filter 3 | Y | N | term reference | affiliation | Filter 3 | term reference | Vocabulary: Filter3 |