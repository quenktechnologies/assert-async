import { Type } from '@quenk/noni/lib/data/type';
import {
    Future,
    attempt
} from '@quenk/noni/lib/control/monad/future';

import { Matcher, assert as _assert } from '@quenk/test/lib/assert';

/**
 * AsyncMatcher
 */
export class AsyncMatcher {

    constructor(
        public value: Type,
        public matcher: (value: Type) => Matcher) { }

    prefix = 'must';

    get be() {

        return this;

    }

    get not() {

        return new AsyncMatcher(this.value, v => this.matcher(v).not);

    }

    get instance() {

        return this;

    }

    of(cons: Function): Future<void> {

        return attempt(() => { this.matcher(this.value).of(cons) });

    }

    object(): Future<void> {

        return attempt(() => { this.matcher(this.value).object(); });

    }

    array(): Future<void> {

        return attempt(() => { this.matcher(this.value).array(); });

    }

    string(): Future<void> {

        return attempt(() => { this.matcher(this.value).string(); });

    }

    number(): Future<void> {

        return attempt(() => { this.matcher(this.value).number(); });

    }

    boolean(): Future<void> {

        return attempt(() => { this.matcher(this.value).boolean(); });

    }

    true(): Future<void> {

        return attempt(() => { this.matcher(this.value).true(); });

    }

    false(): Future<void> {

        return attempt(() => { this.matcher(this.value).false(); });

    }

    null(): Future<void> {

        return attempt(() => { this.matcher(this.value).null(); });

    }

    undefined(): Future<void> {

        return attempt(() => { this.matcher(this.value).undefined(); });

    }

    equal(b: Type): Future<void> {

        return attempt(() => { this.matcher(this.value).equal(b); });

    }

    equate(b: Type): Future<void> {

        return attempt(() => { this.matcher(this.value).equate(b); });

    }

    throws(message?: string): Future<void> {

        return attempt(() => { this.matcher(this.value).throw(message); });

    }

}

/**
 * assert wrapper
 */
export const assert = (value: Type): AsyncMatcher =>
    new AsyncMatcher(value, v => _assert(v));
