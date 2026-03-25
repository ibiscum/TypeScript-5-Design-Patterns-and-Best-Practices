class QueryBuilder {
}
class EmptyQueryBuilder extends QueryBuilder {
}
class SearchService {
    queryBuilder;
    path;
    constructor({ qb = new EmptyQueryBuilder(), path }) {
        this.queryBuilder = qb;
        this.path = path;
    }
}
export { SearchService, QueryBuilder, EmptyQueryBuilder };
