export const ProfilesTable = "profiles";
export interface Profiles {
  id: string;
  username?: string;
  avatar_url?: string;
  website?: string;
  full_name: string;
  updated_at?: string;
}

export const ScrumPokerSessionTable = "scrum_poker_session";
export interface ScrumPokerSession {
  id: string;
  name: string;
  created_at?: string;
  created_by: string;
}

export const ScrumPokerSessionUserTable = "scrum_poker_session_users";
export interface ScrumPokerSessionUser {
  id: string;
  session_id: string;
  user_id: string;
  created_at?: string;
  vote?: string;
  is_voted?: boolean;
  user_full_name: string;
}
