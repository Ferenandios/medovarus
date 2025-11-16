export type AdStatus = "pending" | "approved" | "rejected" | "draft";

export type AdPriority = "normal" | "urgent";

export type ModerationAction = "approved" | "rejected" | "requestChanges";

export interface ModerationHistory {
  id: number;
  moderatorId: number;
  moderatorName: string;
  action: ModerationAction;
  reason: string | null;
  comment: string;
  timestamp: string;
}

export interface Seller {
  id: number;
  name: string;
  rating: string;
  totalAds: number;
  registeredAt: string;
}

export interface Advertisement {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  categoryId: number;
  status: AdStatus;
  priority: AdPriority;
  createdAt: string;
  updatedAt: string;
  images: string[];
  seller: Seller;
  characteristics: Record<string, string>;
  moderationHistory: ModerationHistory[];
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface AdsResponse {
  ads: Advertisement[];
  pagination: Pagination;
}

export interface IState {
  ads: Advertisement[];
  pagination: Pagination;
  isLoading: boolean;
  error: string | null;
  selectedAdId: number | null;
  currentItem: Advertisement;
  stats: Moderator;
  showModal: boolean;
}

export interface ModeratorStats {
  totalReviewed: number;
  todayReviewed: number;
  thisWeekReviewed: number;
  thisMonthReviewed: number;
  averageReviewTime: number;
  approvalRate: number;
}

export interface Moderator {
  id: number;
  name: string;
  email: string;
  role: string;
  statistics: ModeratorStats;
  permissions: string[];
}
