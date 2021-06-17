# Template for defining a new content schema that will work with this theme.

# Content Type Name (e.g. Article, Person, FAQ)

## Entity Type (e.g. Node, Paragraph, Block)

## Purpose : What purpose does this content type serve? That is what unique content will be created using this entity type.

## Schema.org definition link : https://schema.org/Person

| Field Display Name | Multivalue | Required | Data Structure | Schema.org Field Name | Express Field Name | Express Data Structure | Notes                                 |
| :----------------: | :--------: | :------: | :------------: | :-------------------: | :----------------: | :--------------------: | ------------------------------------- |
|       Title        |     N      | Required |      text      |     Content Title     |       Title        |          text          | _used by pathauto for generating URL_ |
