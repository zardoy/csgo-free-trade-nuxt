import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
type Maybe<T> = T | null;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** A string that cannot be passed as an empty value */
  NonEmptyString: any;
};

type Inventory = {
  itemDescriptions: Array<ItemDescription>;
  playerItems: Array<PlayerItem>;
};

type ItemDescription = {
  iconUrl: Scalars['String'];
  itemID: Scalars['String'];
  localizedTitle: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

type Mutation = {
  authSteam: SteamAuth;
  logout: Scalars['Boolean'];
  placeOffer: Scalars['Int'];
  removeOffer: Scalars['Boolean'];
};


type MutationAuthSteamArgs = {
  openIdParams: Scalars['String'];
};


type MutationPlaceOfferArgs = {
  offeringItems: Array<Scalars['String']>;
  wantedItems: Array<Scalars['String']>;
};


type MutationRemoveOfferArgs = {
  id: Scalars['Int'];
  removeCompletely: Scalars['Boolean'];
};

type Offer = {
  id: Scalars['Int'];
  offeringItems: Array<OfferItem>;
  steamId: Scalars['String'];
  wantedItems: Array<OfferItem>;
};

type OfferItem = {
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

type OffersCustomPagination = {
  edges: Array<Offer>;
};

type PlayerItem = {
  amount: Scalars['Int'];
  id: Scalars['String'];
  itemID: Scalars['String'];
  notTradable: Scalars['Boolean'];
};

type Query = {
  checkAuth: SteamAuth;
  myInventory: Inventory;
  offer: Offer;
  offers: OffersCustomPagination;
};


type QueryMyInventoryArgs = {
  language: Scalars['String'];
};


type QueryOfferArgs = {
  id: Scalars['Int'];
};


type QueryOffersArgs = {
  first: Scalars['Int'];
  offeringItem?: Maybe<Scalars['String']>;
  offset: Scalars['Int'];
  wantedItem?: Maybe<Scalars['String']>;
};

type SteamAuth = {
  avatarUrl: Scalars['String'];
  displayName: Scalars['String'];
  steamID: Scalars['String'];
  token: Scalars['String'];
};

type AuthSteamMutationVariables = Exact<{
  search: Scalars['String'];
}>;


type AuthSteamMutation = { authSteam: { token: string, steamID: string, avatarUrl: string, displayName: string } };

type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


type LogoutMutation = { logout: boolean };

type PlaceOfferMutationVariables = Exact<{
  offeringItems: Array<Scalars['String']> | Scalars['String'];
  wantedItems: Array<Scalars['String']> | Scalars['String'];
}>;


type PlaceOfferMutation = { placeOffer: number };

type RemoveOfferMutationVariables = Exact<{
  offerId: Scalars['Int'];
}>;


type RemoveOfferMutation = { removeOffer: boolean };

type AuthUserQueryVariables = Exact<{ [key: string]: never; }>;


type AuthUserQuery = { checkAuth: { avatarUrl: string, displayName: string } };

type MyInventoryQueryVariables = Exact<{ [key: string]: never; }>;


type MyInventoryQuery = { myInventory: { itemDescriptions: Array<{ itemID: string, iconUrl: string, localizedTitle: string, type: string }>, playerItems: Array<{ id: string, notTradable: boolean, itemID: string, amount: number }> } };

type OffersQueryVariables = Exact<{
  first: Scalars['Int'];
  offset: Scalars['Int'];
}>;


type OffersQuery = { offers: { edges: Array<{ id: number, offeringItems: Array<{ id: string, name: string, image?: string | null | undefined }>, wantedItems: Array<{ id: string, name: string, image?: string | null | undefined }> }> } };

type SearchOffersQueryVariables = Exact<{
  wantedItem: Scalars['String'];
  offeringItem: Scalars['String'];
  first: Scalars['Int'];
  offset: Scalars['Int'];
}>;


type SearchOffersQuery = { offers: { edges: Array<{ id: number, offeringItems: Array<{ id: string, name: string, image?: string | null | undefined }>, wantedItems: Array<{ id: string, name: string, image?: string | null | undefined }> }> } };

type OfferQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


type OfferQuery = { offer: { steamId: string, offeringItems: Array<{ id: string, name: string, image?: string | null | undefined }>, wantedItems: Array<{ id: string, name: string, image?: string | null | undefined }> } };


 const AuthSteamDocument = gql`
    mutation AuthSteam($search: String!) {
  authSteam(openIdParams: $search) {
    token
    steamID
    avatarUrl
    displayName
  }
}
    `;

/**
 * __useAuthSteamMutation__
 *
 * To run a mutation, you first call `useAuthSteamMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAuthSteamMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAuthSteamMutation({
 *   variables: {
 *     search: // value for 'search'
 *   },
 * });
 */
export function useAuthSteamMutation(options: VueApolloComposable.UseMutationOptions<AuthSteamMutation, AuthSteamMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<AuthSteamMutation, AuthSteamMutationVariables>>) {
  return VueApolloComposable.useMutation<AuthSteamMutation, AuthSteamMutationVariables>(AuthSteamDocument, options);
}
export type AuthSteamMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<AuthSteamMutation, AuthSteamMutationVariables>;
 const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useLogoutMutation();
 */
export function useLogoutMutation(options: VueApolloComposable.UseMutationOptions<LogoutMutation, LogoutMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<LogoutMutation, LogoutMutationVariables>> = {}) {
  return VueApolloComposable.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
}
export type LogoutMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<LogoutMutation, LogoutMutationVariables>;
 const PlaceOfferDocument = gql`
    mutation PlaceOffer($offeringItems: [String!]!, $wantedItems: [String!]!) {
  placeOffer(offeringItems: $offeringItems, wantedItems: $wantedItems)
}
    `;

/**
 * __usePlaceOfferMutation__
 *
 * To run a mutation, you first call `usePlaceOfferMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `usePlaceOfferMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = usePlaceOfferMutation({
 *   variables: {
 *     offeringItems: // value for 'offeringItems'
 *     wantedItems: // value for 'wantedItems'
 *   },
 * });
 */
export function usePlaceOfferMutation(options: VueApolloComposable.UseMutationOptions<PlaceOfferMutation, PlaceOfferMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<PlaceOfferMutation, PlaceOfferMutationVariables>>) {
  return VueApolloComposable.useMutation<PlaceOfferMutation, PlaceOfferMutationVariables>(PlaceOfferDocument, options);
}
export type PlaceOfferMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<PlaceOfferMutation, PlaceOfferMutationVariables>;
 const RemoveOfferDocument = gql`
    mutation RemoveOffer($offerId: Int!) {
  removeOffer(id: $offerId, removeCompletely: false)
}
    `;

/**
 * __useRemoveOfferMutation__
 *
 * To run a mutation, you first call `useRemoveOfferMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRemoveOfferMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRemoveOfferMutation({
 *   variables: {
 *     offerId: // value for 'offerId'
 *   },
 * });
 */
export function useRemoveOfferMutation(options: VueApolloComposable.UseMutationOptions<RemoveOfferMutation, RemoveOfferMutationVariables> | ReactiveFunction<VueApolloComposable.UseMutationOptions<RemoveOfferMutation, RemoveOfferMutationVariables>>) {
  return VueApolloComposable.useMutation<RemoveOfferMutation, RemoveOfferMutationVariables>(RemoveOfferDocument, options);
}
export type RemoveOfferMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<RemoveOfferMutation, RemoveOfferMutationVariables>;
 const AuthUserDocument = gql`
    query AuthUser {
  checkAuth {
    avatarUrl
    displayName
  }
}
    `;

/**
 * __useAuthUserQuery__
 *
 * To run a query within a Vue component, call `useAuthUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthUserQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAuthUserQuery();
 */
export function useAuthUserQuery(options: VueApolloComposable.UseQueryOptions<AuthUserQuery, AuthUserQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AuthUserQuery, AuthUserQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AuthUserQuery, AuthUserQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AuthUserQuery, AuthUserQueryVariables>(AuthUserDocument, {}, options);
}
export type AuthUserQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AuthUserQuery, AuthUserQueryVariables>;
 const MyInventoryDocument = gql`
    query MyInventory {
  myInventory(language: "english") {
    itemDescriptions {
      itemID
      iconUrl
      localizedTitle
      type
    }
    playerItems {
      id
      notTradable
      itemID
      amount
    }
  }
}
    `;

/**
 * __useMyInventoryQuery__
 *
 * To run a query within a Vue component, call `useMyInventoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyInventoryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMyInventoryQuery();
 */
export function useMyInventoryQuery(options: VueApolloComposable.UseQueryOptions<MyInventoryQuery, MyInventoryQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<MyInventoryQuery, MyInventoryQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<MyInventoryQuery, MyInventoryQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<MyInventoryQuery, MyInventoryQueryVariables>(MyInventoryDocument, {}, options);
}
export type MyInventoryQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<MyInventoryQuery, MyInventoryQueryVariables>;
 const OffersDocument = gql`
    query Offers($first: Int!, $offset: Int!) {
  offers(first: $first, offset: $offset) {
    edges {
      id
      offeringItems {
        id
        name
        image
      }
      wantedItems {
        id
        name
        image
      }
    }
  }
}
    `;

/**
 * __useOffersQuery__
 *
 * To run a query within a Vue component, call `useOffersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOffersQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useOffersQuery({
 *   first: // value for 'first'
 *   offset: // value for 'offset'
 * });
 */
export function useOffersQuery(variables: OffersQueryVariables | VueCompositionApi.Ref<OffersQueryVariables> | ReactiveFunction<OffersQueryVariables>, options: VueApolloComposable.UseQueryOptions<OffersQuery, OffersQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<OffersQuery, OffersQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<OffersQuery, OffersQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<OffersQuery, OffersQueryVariables>(OffersDocument, variables, options);
}
export type OffersQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<OffersQuery, OffersQueryVariables>;
 const SearchOffersDocument = gql`
    query SearchOffers($wantedItem: String!, $offeringItem: String!, $first: Int!, $offset: Int!) {
  offers(
    first: $first
    offset: $offset
    wantedItem: $wantedItem
    offeringItem: $offeringItem
  ) {
    edges {
      id
      offeringItems {
        id
        name
        image
      }
      wantedItems {
        id
        name
        image
      }
    }
  }
}
    `;

/**
 * __useSearchOffersQuery__
 *
 * To run a query within a Vue component, call `useSearchOffersQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchOffersQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSearchOffersQuery({
 *   wantedItem: // value for 'wantedItem'
 *   offeringItem: // value for 'offeringItem'
 *   first: // value for 'first'
 *   offset: // value for 'offset'
 * });
 */
export function useSearchOffersQuery(variables: SearchOffersQueryVariables | VueCompositionApi.Ref<SearchOffersQueryVariables> | ReactiveFunction<SearchOffersQueryVariables>, options: VueApolloComposable.UseQueryOptions<SearchOffersQuery, SearchOffersQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<SearchOffersQuery, SearchOffersQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<SearchOffersQuery, SearchOffersQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<SearchOffersQuery, SearchOffersQueryVariables>(SearchOffersDocument, variables, options);
}
export type SearchOffersQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<SearchOffersQuery, SearchOffersQueryVariables>;
 const OfferDocument = gql`
    query Offer($id: Int!) {
  offer(id: $id) {
    steamId
    offeringItems {
      id
      name
      image
    }
    wantedItems {
      id
      name
      image
    }
  }
}
    `;

/**
 * __useOfferQuery__
 *
 * To run a query within a Vue component, call `useOfferQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfferQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useOfferQuery({
 *   id: // value for 'id'
 * });
 */
export function useOfferQuery(variables: OfferQueryVariables | VueCompositionApi.Ref<OfferQueryVariables> | ReactiveFunction<OfferQueryVariables>, options: VueApolloComposable.UseQueryOptions<OfferQuery, OfferQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<OfferQuery, OfferQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<OfferQuery, OfferQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<OfferQuery, OfferQueryVariables>(OfferDocument, variables, options);
}
export type OfferQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<OfferQuery, OfferQueryVariables>;