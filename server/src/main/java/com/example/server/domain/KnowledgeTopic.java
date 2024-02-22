package com.example.server.domain;



import lombok.*;

import jakarta.persistence.*;

@Entity
@Data
@Table(name = "KnowledgeTopic")
@AllArgsConstructor
@NoArgsConstructor
public class KnowledgeTopic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TopicID")
    private Long topicId;

    @Column(name = "TopicName", nullable = false, length = 255)
    private String topicName;

    @Column(name = "Description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "AgeRangeChild")
    private Boolean ageRangeChild;

    @Column(name = "AgeRangeTeen")
    private Boolean ageRangeTeen;

    @Column(name = "AgeRangeParent")
    private Boolean ageRangeParent;
}
