import { Type } from '@quenk/noni/lib/data/type';
import { Future } from '@quenk/noni/lib/control/monad/future';
import { Matcher } from '@quenk/test/lib/assert';
/**
 * AsyncMatcher
 */
export declare class AsyncMatcher {
    value: Type;
    matcher: (value: Type) => Matcher;
    constructor(value: Type, matcher: (value: Type) => Matcher);
    prefix: string;
    get be(): this;
    get not(): AsyncMatcher;
    get instance(): this;
    of(cons: Function): Future<void>;
    object(): Future<void>;
    array(): Future<void>;
    string(): Future<void>;
    number(): Future<void>;
    boolean(): Future<void>;
    true(): Future<void>;
    false(): Future<void>;
    null(): Future<void>;
    undefined(): Future<void>;
    equal(b: Type): Future<void>;
    equate(b: Type): Future<void>;
    throws(message?: string): Future<void>;
}
/**
 * assert wrapper
 */
export declare const assert: (value: Type) => AsyncMatcher;
